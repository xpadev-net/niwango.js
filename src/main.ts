import Core from "@xpadev-net/niwango-core";

import { Comment } from "@/@types/comment";
import { IRender } from "@/@types/IRender";
import { setComments, setCurrentTime, setIsWide, setRender } from "@/context";
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
import { setup } from "@/utils/setup";
import { nativeSort } from "@/utils/sort";

class Niwango {
  private readonly render: IRender;
  static default = Niwango;
  private lastVpos: number;
  constructor(
    targetElement: HTMLCanvasElement | HTMLDivElement,
    comments: Comment[]
  ) {
    setup();
    initConfig();
    if (targetElement.nodeName === "DIV") {
      this.render = new DomRender(targetElement as HTMLDivElement);
    } else {
      this.render = new CanvasRender(targetElement as HTMLCanvasElement);
    }
    this.lastVpos = -1;

    comments.forEach((comment) => {
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
    });
    setComments(comments);
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

  private execute(vpos: number) {
    if (vpos < this.lastVpos) {
      if (vpos > this.lastVpos - 100) {
        return;
      }
      try {
        this.lastVpos = restoreSnapshot(vpos);
      } catch (e) {
        this.lastVpos = vpos;
      }
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
        nativeSort("time")
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
            trace
          );
        } catch (e) {
          console.error(e);
        }
        tasks.sort(nativeSort("time"));
      }
    }
    this.lastVpos = vpos;
  }

  public draw(vpos: number, clear = true) {
    if (this.lastVpos === vpos) return false;
    this.execute(vpos);
    this._draw(clear);
    return true;
  }

  private _draw(clear: boolean) {
    this.render.clear();
    draw();
    this.render.apply(clear);
  }
}

export default Niwango;
