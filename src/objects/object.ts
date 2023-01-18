import { config } from "@/definition/config";
import { register } from "@/utils/objectManager";

const defaultOptions: IObjectOptions = {
  x: 0,
  y: 0,
  z: 0,
  pos: "naka",
  posX: "naka",
  posY: "naka",
  color: 0,
  visible: true,
  alpha: 0,
  scale: 1,
  mover: "",
};

abstract class IrObject {
  protected readonly targetContext: CanvasRenderingContext2D;
  protected readonly __canvas: HTMLCanvasElement;
  protected readonly __context: CanvasRenderingContext2D;
  protected options: IObjectOptions;
  protected __width: number;
  protected __height: number;

  protected constructor(
    context: CanvasRenderingContext2D,
    options: Partial<IObjectOptions>
  ) {
    this.targetContext = context;
    this.options = Object.assign(defaultOptions, options);
    const canvas = document.createElement("canvas");
    canvas.width = config.canvasWidth;
    canvas.height = config.canvasHeight;
    const __context = canvas.getContext("2d");
    if (!__context) throw new Error("Fail to get CanvasRenderingContext2D");
    this.__canvas = canvas;
    this.__context = __context;
    this.__context.textAlign = "start";
    this.__context.textBaseline = "alphabetic";
    this.__context.lineWidth = 4;
    this.__width = this.__height = 0;
    register(this);
  }

  get x() {
    return this.options.x;
  }

  set x(val: number) {
    this.options.x = val;
  }

  get width() {
    return this.__width;
  }
  set width(val: number) {
    this.__width = val;
  }
  get height() {
    return this.__height;
  }
  set height(val: number) {
    this.__height = val;
  }
  get scale() {
    return this.options.scale;
  }
  set scale(val: number) {
    this.options.scale = val;
  }

  get __x() {
    if (this.options.posX === "migi") {
      return config.canvasWidth - this.options.x - this.width;
    } else if (this.options.posX === "hidari") {
      return this.options.x;
    }
    return config.canvasWidth / 2 + this.options.x - this.width / 2;
  }

  get y() {
    return this.options.y;
  }

  set y(val: number) {
    this.options.y = val;
  }

  get __y() {
    if (this.options.posY === "ue") {
      return this.options.y;
    } else if (this.options.posY === "shita") {
      return config.canvasHeight - this.options.y - this.height;
    }
    return config.canvasHeight / 2 + this.options.y - this.height / 2;
  }

  get z() {
    return this.options.z;
  }

  set z(val: number) {
    this.options.z = val;
  }

  get pos() {
    return this.options.pos;
  }

  set pos(val: string) {
    this.options.pos = val;
    this.__parsePos();
  }

  get color() {
    return this.options.color;
  }

  set color(val: number) {
    this.options.color = val;
    this.__updateStyle();
    this.__draw();
  }

  get visible() {
    return this.options.visible;
  }

  set visible(val: boolean) {
    this.options.visible = val;
  }

  get alpha() {
    return this.options.alpha;
  }

  set alpha(val: number) {
    this.options.alpha = val;
  }

  get mover() {
    return this.options.mover;
  }

  set mover(val: IObjectMover) {
    this.options.mover = val;
  }

  protected __parsePos() {
    const pos = this.options.pos.split(/\s/);
    if (pos.includes("hidari")) {
      this.options.posX = "hidari";
    } else if (pos.includes("migi")) {
      this.options.posX = "migi";
    } else {
      this.options.posX = "naka";
    }
    if (pos.includes("ue")) {
      this.options.posY = "ue";
    } else if (pos.includes("shita")) {
      this.options.posY = "shita";
    } else {
      this.options.posY = "naka";
    }
  }
  protected __updateStyle() {
    console.debug("please override this method");
  }
  protected __draw() {
    console.debug("please override this method");
  }

  public draw() {
    console.debug("please override this method");
  }
}
export { IrObject };
