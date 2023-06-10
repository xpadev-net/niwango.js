import Core, { T_scope } from "@xpadev-net/niwango-core";

import { Comment } from "@/@types/comment";
import { T_environment } from "@/@types/types";
import { getComments, triggerHandlers } from "@/commentHandler";
import {
  isWide,
  setComments,
  setContext,
  setCurrentTime,
  setIsWide,
} from "@/context";
import { config, initConfig } from "@/definition/config";
import { getQueue } from "@/queue";
import { addScript, getScripts } from "@/scripts";
import { draw } from "@/utils/objectManager";
import { setup } from "@/utils/setup";
import { nativeSort } from "@/utils/sort";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  private readonly targetContext: CanvasRenderingContext2D;
  public readonly targetCanvas: HTMLCanvasElement;
  private readonly drawCanvas: HTMLCanvasElement;
  private readonly drawContext: CanvasRenderingContext2D;
  static default = Niwango;
  private lastVpos: number;
  constructor(targetCanvas: HTMLCanvasElement, comments: Comment[]) {
    setup();
    this.targetCanvas = targetCanvas;
    this.drawCanvas = document.createElement("canvas");
    this.lastVpos = 0;
    initConfig();

    comments.forEach((comment) => {
      if (comment.message.match(/^\//) && comment._owner) {
        try {
          const ast = Core.parseScript(
            comment.message,
            `${comment.no}.niwascript`
          );
          addScript(ast, comment._vpos);
        } catch (e) {
          console.error(e);
        }
      }
      setComments(comments);
    });
    this.drawCanvas.width = 1920;
    this.drawCanvas.height = 1080;
    const drawContext = this.drawCanvas.getContext("2d");
    const targetContext = this.targetCanvas.getContext("2d");
    if (!(drawContext && targetContext)) {
      throw new Error();
    }
    this.targetContext = targetContext;
    this.drawContext = drawContext;
    this.drawContext.scale(
      1920 / config.canvasWidth,
      1080 / config.canvasHeight
    );
    setContext(drawContext);
    setCurrentTime(0);
    this.globalScope = {};
    this.environmentScope = {
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
      get screenWidth() {
        return config.stageWidth[this.isWide ? "full" : "default"];
      },
      screenHeight: config.stageHeight,
    };
  }

  public draw(vpos: number) {
    setIsWide(!!this.environmentScope.isWide);
    for (let i = this.lastVpos; i < vpos; i++) {
      const tasks = [...getQueue(i), ...getScripts(i), ...getComments(i)].sort(
        nativeSort("time")
      );
      while (tasks.length > 0) {
        const queue = tasks.shift();
        if (!queue) break;
        setCurrentTime(queue.time);
        if (queue.type === "comment") {
          triggerHandlers(queue.comment);
          continue;
        }
        try {
          Core.execute(
            queue.script,
            queue.type === "queue"
              ? queue.scopes
              : [this.globalScope, this.environmentScope, Core.prototypeScope]
          );
        } catch (e) {
          console.error(e);
        }
        tasks.sort(nativeSort("time"));
      }
    }
    this.clear();
    draw();
    this.lastVpos = vpos;
    if (!isWide) this.drawLetterBox();
    this.targetContext.drawImage(
      this.drawCanvas,
      0,
      0,
      this.drawCanvas.width,
      this.drawCanvas.height,
      0,
      0,
      this.targetCanvas.width,
      this.targetCanvas.height
    );
  }

  private drawLetterBox() {
    const letterBoxWidth =
      (config.stageWidth.full - config.stageWidth.default) / 2;
    this.drawContext.clearRect(0, 0, letterBoxWidth, config.stageHeight);
    this.drawContext.clearRect(
      config.canvasWidth - letterBoxWidth,
      0,
      letterBoxWidth,
      config.stageHeight
    );
  }

  public clear() {
    this.drawContext.clearRect(
      0,
      0,
      this.drawCanvas.width,
      this.drawCanvas.height
    );
  }
}

export default Niwango;
