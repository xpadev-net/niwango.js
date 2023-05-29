import { T_environment, T_scope } from "@/@types/ast";
import { IComment } from "@/@types/types";
import { getComments, triggerHandlers } from "@/commentHandler";
import { CommentMapper } from "@/commentMapper";
import {
  execute,
  setComments,
  setContext,
  setCurrentTime,
  setIsWide,
} from "@/context";
import { config, initConfig } from "@/definition/config";
import { parseScript } from "@/parser/parse";
import { getQueue } from "@/queue";
import { addScript, getScripts } from "@/scripts";
import { draw } from "@/utils/objectManager";
import { setup } from "@/utils/setup";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  private readonly targetContext: CanvasRenderingContext2D;
  public readonly targetCanvas: HTMLCanvasElement;
  private readonly drawCanvas: HTMLCanvasElement;
  private readonly drawContext: CanvasRenderingContext2D;
  static default = Niwango;
  constructor(targetCanvas: HTMLCanvasElement, formattedComments: IComment[]) {
    setup();
    this.targetCanvas = targetCanvas;
    this.drawCanvas = document.createElement("canvas");
    initConfig();
    const comments = formattedComments.map(
      (comment) => new CommentMapper(comment)
    );

    comments.forEach((comment) => {
      if (comment.message.match(/^\//) && comment.comment.owner) {
        try {
          const ast = parseScript(comment.message, `${comment.no}.niwascript`);
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
    this.globalScope = {
      Object: {},
    };
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
    [...getQueue(vpos), ...getScripts(vpos), ...getComments(vpos)]
      .sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        }
        if (a.time > b.time) {
          return 1;
        }
        return 0;
      })
      .forEach((queue) => {
        setCurrentTime(queue.time);
        if (queue.type === "comment") {
          triggerHandlers(queue.comment);
          return;
        }
        execute(
          queue.script,
          queue.type === "queue"
            ? queue.scopes
            : [this.globalScope, this.environmentScope]
        );
      });
    this.clear();
    draw();
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
