import {config} from "@/definition/config";

import { register } from "@/utils/objectManager";

const defaultOptions: IObjectOptions = {
  x: 0,
  y: 0,
  z: 0,
  pos: "naka",
  color: 0,
  visible: true,
  alpha: 0,
  mover: "",
};

class IrObject {
  protected readonly targetContext: CanvasRenderingContext2D;
  protected readonly __canvas: HTMLCanvasElement;
  protected readonly __context: CanvasRenderingContext2D;
  protected options: IObjectOptions;

  constructor(
    context: CanvasRenderingContext2D,
    options: IObjectOptionsNullable
  ) {
    this.targetContext = context;
    this.options = Object.assign(defaultOptions, options);
    const canvas = document.createElement("canvas");
    canvas.width = config.canvasWidth;
    canvas.height = config.canvasHeight;
    const __context = canvas.getContext("2d");
    if (!__context)throw new Error("Fail to get CanvasRenderingContext2D");
    this.__canvas = canvas;
    this.__context = __context;
    this.__context.textAlign = "start";
    this.__context.textBaseline = "alphabetic";
    this.__context.lineWidth = 4;
    register(this);
  }

  get x() {
    return this.options.x;
  }

  set x(val:number) {
    this.options.x = val;
  }

  get y() {
    return this.options.y;
  }

  set y(val:number) {
    this.options.y = val;
  }

  get z() {
    return this.options.z;
  }

  set z(val:number) {
    this.options.z = val;
  }

  get pos() {
    return this.options.pos;
  }

  set pos(val:string) {
    this.options.pos = val;
  }

  get color() {
    return this.options.color;
  }

  set color(val:number) {
    this.options.color = val;
  }

  get visible() {
    return this.options.visible;
  }

  set visible(val:boolean) {
    this.options.visible = val;
  }

  get alpha() {
    return this.options.alpha;
  }

  set alpha(val:number) {
    this.options.alpha = val;
  }

  get mover() {
    return this.options.mover;
  }

  set mover(val:IObjectMover) {
    this.options.mover = val;
  }
  
  draw(){}
}
export { IrObject };
