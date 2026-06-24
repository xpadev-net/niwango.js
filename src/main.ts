import Core from "@xpadev-net/niwango-core";

import type { Comment } from "@/@types/comment";
import type { IRender } from "@/@types/IRender";
import {
  comments,
  setComments,
  setCurrentTime,
  setIsWide,
  setRender,
} from "@/context";
import { getComments, triggerHandlers } from "@/contexts/commentHandler";
import { draw } from "@/contexts/objectManager";
import { getQueue } from "@/contexts/queue";
import {
  environmentScope,
  globalScope,
  setEnvironmentScope,
  setGlobalScope,
} from "@/contexts/scope";
import { addScript, getScripts } from "@/contexts/scripts";
import {
  getLatestSnapshotVpos,
  restoreSnapshot,
  saveSnapshot,
} from "@/contexts/snapshot";
import { config, initConfig } from "@/definition/config";
import { CanvasRender } from "@/render/canvas";
import { DomRender } from "@/render/dom";
import { normalizeComment } from "@/typeGuard";
import { setup } from "@/utils/setup";
import { nativeSort } from "@/utils/sort";

const MAX_DRAW_VPOS_STEP_WINDOW = 100_000;

const normalizeDrawVpos = (vpos: number) => {
  if (!Number.isFinite(vpos)) {
    throw new RangeError("Niwango.draw vpos must be a finite number.");
  }
  if (vpos < 0) {
    throw new RangeError("Niwango.draw vpos must be non-negative.");
  }
  return Math.floor(vpos);
};

const canProcessDrawStepWindow = (fromVpos: number, toVpos: number) => {
  const stepWindow = toVpos - Math.max(0, fromVpos);
  return stepWindow <= MAX_DRAW_VPOS_STEP_WINDOW;
};

const normalizeComments = (commentInputs: unknown) => {
  const normalizedComments: Comment[] = [];
  if (!Array.isArray(commentInputs)) {
    return normalizedComments;
  }
  for (const commentInput of commentInputs) {
    const comment = normalizeComment(commentInput);
    if (comment) {
      normalizedComments.push(comment);
    }
  }
  return normalizedComments;
};

type NiwangoParseErrorEvent = {
  phase: "parse";
  error: unknown;
  comment: Comment;
};

type NiwangoExecuteErrorEvent = {
  phase: "execute";
  error: unknown;
  source: "script" | "queue" | "commentHandler";
  vpos: number;
};

export type NiwangoErrorEvent =
  | NiwangoParseErrorEvent
  | NiwangoExecuteErrorEvent;

export type NiwangoOptions = {
  onError?: (event: NiwangoErrorEvent) => void;
};

const reportError = (
  onError: NiwangoOptions["onError"],
  event: NiwangoErrorEvent,
) => {
  console.error(event.error);
  if (!onError) {
    return;
  }
  try {
    onError(event);
  } catch (e) {
    console.error(e);
  }
};

const addCommentScript = (
  comment: Comment,
  onError?: NiwangoOptions["onError"],
) => {
  if (comment.message.match(/^\//) && comment._owner) {
    try {
      const ast = {
        ...Core.parseScript(comment.message, `${comment.no}.niwascript`),
        __name: `${comment.no}.niwascript`,
      };
      addScript(ast, comment._vpos);
    } catch (e) {
      reportError(onError, { phase: "parse", error: e, comment });
    }
  }
};

type TargetElementDefinition = {
  localName: "canvas" | "div";
};

const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";

const getElementProperty = (
  targetElement: unknown,
  propertyName: "localName" | "namespaceURI",
) => {
  const propertyGetter = Object.getOwnPropertyDescriptor(
    globalThis.Element?.prototype ?? {},
    propertyName,
  )?.get;
  if (typeof propertyGetter !== "function") {
    return undefined;
  }
  try {
    return propertyGetter.call(targetElement);
  } catch (_e) {
    return undefined;
  }
};

const isTargetElement = <T extends Element>(
  targetElement: unknown,
  { localName }: TargetElementDefinition,
): targetElement is T => {
  return (
    getElementProperty(targetElement, "namespaceURI") === HTML_NAMESPACE &&
    getElementProperty(targetElement, "localName") === localName
  );
};

const createRender = (targetElement: unknown): IRender => {
  if (
    isTargetElement<HTMLDivElement>(targetElement, {
      localName: "div",
    })
  ) {
    return new DomRender(targetElement);
  }
  if (
    isTargetElement<HTMLCanvasElement>(targetElement, {
      localName: "canvas",
    })
  ) {
    return new CanvasRender(targetElement);
  }
  throw new TypeError(
    "Niwango constructor targetElement must be an HTMLDivElement or HTMLCanvasElement.",
  );
};

class Niwango {
  private readonly render: IRender;
  private readonly onError?: NiwangoOptions["onError"];
  static default = Niwango;
  private lastVpos: number;
  constructor(
    targetElement: HTMLCanvasElement | HTMLDivElement,
    comments: Comment[],
    options: NiwangoOptions = {},
  ) {
    setup();
    initConfig();
    this.render = createRender(targetElement);
    this.onError = options.onError;
    this.lastVpos = -1;

    const normalizedComments = normalizeComments(comments);
    normalizedComments.forEach((comment) => {
      addCommentScript(comment, this.onError);
    });
    setComments(normalizedComments);
    setCurrentTime(-1);
    setRender(this.render);
    setGlobalScope({});
    setEnvironmentScope({
      chat: undefined,
      commentColor: null, //0xffffff
      commentPlace: null, //naka
      commentSize: null, //medium
      commentInvisible: null, //false
      commentReverse: null, //0
      defaultSage: false, //false
      postDisabled: null, //false
      seekDisabled: null, //false
      isLoaded: true, //true
      isWide: null, //false
      lastVideo: "sm1", //sm1
      screenWidth: config.stageWidth.default,
      screenHeight: config.stageHeight,
    });
  }

  private skipToVpos(vpos: number) {
    getQueue(vpos);
    getScripts(vpos);
    setCurrentTime(vpos);
    this.lastVpos = vpos;
  }

  private execute(vpos: number) {
    if (vpos < this.lastVpos) {
      // Small rewinds keep the current execution state and intentionally no-op.
      if (vpos > this.lastVpos - 100) {
        return true;
      }
      try {
        this.lastVpos = restoreSnapshot(vpos);
      } catch (_e) {
        this.lastVpos = vpos;
      }
    }
    if (!canProcessDrawStepWindow(this.lastVpos, vpos)) {
      this.skipToVpos(vpos);
      return false;
    }
    let lastSnapshotVpos = getLatestSnapshotVpos(vpos);
    for (let i = this.lastVpos; i <= vpos; i++) {
      if (lastSnapshotVpos + config.snapshotIntervalVpos <= i) {
        lastSnapshotVpos = lastSnapshotVpos + config.snapshotIntervalVpos;
        try {
          saveSnapshot(lastSnapshotVpos);
        } catch (e) {
          console.error(e);
        }
      }
      const tasks = [...getQueue(i), ...getScripts(i), ...getComments(i)].sort(
        nativeSort("time"),
      );
      while (tasks.length > 0) {
        const queue = tasks.shift();
        if (!queue) break;
        setCurrentTime(queue.time);
        if (i === 0) {
          setIsWide(!!environmentScope.isWide);
          environmentScope.screenWidth =
            config.stageWidth[environmentScope.isWide ? "full" : "default"];
        }
        if (queue.type === "comment") {
          triggerHandlers(queue.comment, (error, comment) => {
            reportError(this.onError, {
              phase: "execute",
              error,
              source: "commentHandler",
              vpos: comment._vpos,
            });
          });
          continue;
        }
        try {
          const trace =
            queue.type === "script"
              ? [queue.script]
              : [...queue.trace, { __queue: queue.type, ...queue.script }];
          Core.execute(
            queue.script,
            queue.type === "queue"
              ? queue.scopes
              : [globalScope, environmentScope, Core.prototypeScope],
            trace,
          );
        } catch (e) {
          reportError(this.onError, {
            phase: "execute",
            error: e,
            source: queue.type,
            vpos: queue.time,
          });
        }
        tasks.sort(nativeSort("time"));
      }
    }
    this.lastVpos = vpos;
    return true;
  }

  public draw(vpos: number, clear = true) {
    vpos = normalizeDrawVpos(vpos);
    if (this.lastVpos === vpos) return false;
    if (!this.execute(vpos)) return false;
    this._draw(clear);
    return true;
  }

  private _draw(clear: boolean) {
    this.render.clear();
    draw();
    this.render.apply(clear);
  }

  public addComments(...newComments: Comment[]) {
    const normalizedComments = normalizeComments(newComments);
    const futureComments = normalizedComments.filter(
      (comment) => comment._vpos > this.lastVpos,
    );
    futureComments.forEach((comment) => {
      addCommentScript(comment, this.onError);
    });
    setComments([...comments, ...futureComments]);
  }
}

export default Niwango;
