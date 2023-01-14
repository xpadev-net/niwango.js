import { execute, setContext } from "@/executor";
import { parse } from "./parser/parser";
import { draw } from "@/utils/objectManager";
import { config } from "@/definition/config";
import { getQueue, resetQueue, setCurrentTime } from "@/queue";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  private readonly targetContext: CanvasRenderingContext2D;
  public readonly targetCanvas: HTMLCanvasElement;
  private readonly drawCanvas: HTMLCanvasElement;
  private readonly drawContext: CanvasRenderingContext2D;
  static default = Niwango;
  constructor(targetCanvas: HTMLCanvasElement) {
    this.targetCanvas = targetCanvas;
    this.drawCanvas = document.createElement("canvas");
    this.drawCanvas.width = config.canvasWidth;
    this.drawCanvas.height = config.canvasHeight;
    const drawContext = this.drawCanvas.getContext("2d");
    this.targetContext = this.targetCanvas.getContext("2d")!;
    if (!drawContext) throw new Error();
    this.drawContext = drawContext;
    setContext(drawContext);
    resetQueue();
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

  public processComment(comment: formattedComment) {
    if (comment.content.startsWith("/")) {
      this.execute(comment.content.slice(1), comment.vpos);
    } else {
    }
  }

  public execute(script: string, vpos: number) {
    setCurrentTime(vpos);
    getQueue(vpos).forEach((queue) => execute(queue.script, queue.scopes));

    const ast = parse(script);
    return execute(ast, [this.globalScope, this.environmentScope]);
  }

  public draw() {
    draw();
    this.targetContext.drawImage(
      this.drawCanvas,
      0,
      0,
      config.canvasWidth,
      config.canvasHeight,
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
