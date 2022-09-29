import { execute, setContext } from "@/executor";
// @ts-ignore
import { parse } from "./parser/parser";
import { draw } from "@/utils/objectManager";
import { config } from "@/definition/config";
import { IrText } from "@/objects/text";

class Niwango {
  private readonly globalScope: T_scope;
  private readonly environmentScope: T_environment;
  private readonly drawCanvas: HTMLCanvasElement;
  public outputContext: CanvasRenderingContext2D;
  constructor(context: CanvasRenderingContext2D) {
    this.outputContext = context;
    const drawCanvas = document.createElement("canvas");
    drawCanvas.width = config.canvasWidth;
    drawCanvas.height = config.canvasHeight;
    const drawContext = drawCanvas.getContext("2d");
    if (!drawContext) throw new Error();
    this.drawCanvas = drawCanvas;
    setContext(drawContext);
    new IrText(drawContext, {});
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
    execute(ast, [this.globalScope, this.environmentScope]);
  }

  public draw() {
    draw();
    this.outputContext.drawImage(
      this.drawCanvas,
      0,
      0,
      config.canvasWidth,
      config.canvasHeight,
      0,
      0,
      1920,
      1080
    );
  }
}

export default Niwango;
