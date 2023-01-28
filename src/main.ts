import { execute, setContext } from "@/executor";
import { parse } from "./parser/parser";
import { draw, resetObjects } from "@/utils/objectManager";
import { config, initConfig } from "@/definition/config";
import { getQueue, resetQueue, setCurrentTime } from "@/queue";
import { addScript, getScripts } from "@/scripts";
import { formattedComment } from "@/@types/types";

//let comments = [];

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  private readonly targetContext: CanvasRenderingContext2D;
  public readonly targetCanvas: HTMLCanvasElement;
  private readonly drawCanvas: HTMLCanvasElement;
  private readonly drawContext: CanvasRenderingContext2D;
  static default = Niwango;
  constructor(targetCanvas: HTMLCanvasElement, formattedComments: formattedComment[]) {
    this.targetCanvas = targetCanvas;
    this.drawCanvas = document.createElement("canvas");
    initConfig();
    formattedComments.forEach((comment) => {
      if (comment.content.match(/^\//) && comment.owner) {
        addScript(parse(comment.content.slice(1)), comment.vpos);
      }
    });
    this.drawCanvas.width = 1920;
    this.drawCanvas.height = 1080;
    const drawContext = this.drawCanvas.getContext("2d");
    this.targetContext = this.targetCanvas.getContext("2d")!;
    if (!drawContext) {
      throw new Error();
    }
    console.log(this.targetCanvas);
    this.drawContext = drawContext;
    this.drawContext.scale(1920 / config.canvasWidth, 1080 / config.canvasHeight);
    setContext(drawContext);
    resetQueue();
    resetObjects();
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
    };
  }

  public draw(vpos: number) {
    [...getQueue(vpos), ...getScripts(vpos)]
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
        execute(queue.script, queue.type === "queue" ? queue.scopes : [this.globalScope, this.environmentScope]);
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
      this.targetCanvas.height,
    );
  }
  public clear() {
    this.drawContext.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
  }
}

export default Niwango;
