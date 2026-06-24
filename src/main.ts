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

const addCommentScript = (comment: Comment) => {
  if (comment.message.match(/^\//) && comment._owner) {
    try {
      const ast = {
        ...Core.parseScript(comment.message, `${comment.no}.niwascript`),
        __name: `${comment.no}.niwascript`,
      };
      addScript(ast, comment._vpos);
    } catch (e) {
      console.error(e);
    }
  }
};

class Niwango {
  private readonly render: IRender;
  static default = Niwango;
  private lastVpos: number;
  constructor(
    targetElement: HTMLCanvasElement | HTMLDivElement,
    comments: Comment[],
  ) {
    setup();
    initConfig();
    if (targetElement.nodeName === "DIV") {
      this.render = new DomRender(targetElement as HTMLDivElement);
    } else {
      this.render = new CanvasRender(targetElement as HTMLCanvasElement);
    }
    this.lastVpos = -1;

    const normalizedComments = normalizeComments(comments);
    normalizedComments.forEach(addCommentScript);
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
          triggerHandlers(queue.comment);
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
          console.error(e);
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
    normalizedComments.forEach(addCommentScript);
    setComments([...comments, ...normalizedComments]);
  }
}

export default Niwango;
