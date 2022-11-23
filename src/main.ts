import { execute, setContext } from "@/executor";
// @ts-ignore
import { parse } from "./parser/parser";
import { draw } from "@/utils/objectManager";
import { config } from "@/definition/config";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  private readonly drawContext: CanvasRenderingContext2D;
  public readonly drawCanvas: HTMLCanvasElement;
  constructor(drawCanvas: HTMLCanvasElement) {
    drawCanvas.width = config.canvasWidth;
    drawCanvas.height = config.canvasHeight;
    const drawContext = drawCanvas.getContext("2d");
    if (!drawContext) throw new Error();
    this.drawCanvas = drawCanvas;
    this.drawContext = drawContext;
    setContext(drawContext);
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

  public execute(script: string) {
    const ast = (parse as T_parse)(script);
    return execute(ast, [this.globalScope, this.environmentScope]);
  }

  public draw() {
    draw();
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
