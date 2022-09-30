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
  protected readonly context: CanvasRenderingContext2D;
  protected options: IObjectOptions;

  constructor(
    context: CanvasRenderingContext2D,
    options: IObjectOptionsNullable
  ) {
    this.context = context;
    this.context.textAlign = "start";
    this.context.textBaseline = "alphabetic";
    this.context.lineWidth = 4;
    this.options = Object.assign(defaultOptions, options);
    register(this);
  }

  get x() {
    return this.options.x;
  }

  set x(val) {
    this.options.x = val;
  }

  get y() {
    return this.options.y;
  }

  set y(val) {
    this.options.y = val;
  }

  get z() {
    return this.options.z;
  }

  set z(val) {
    this.options.z = val;
  }

  get pos() {
    return this.options.pos;
  }

  set pos(val) {
    this.options.pos = val;
  }

  get color() {
    return this.options.color;
  }

  set color(val) {
    this.options.color = val;
  }

  get visible() {
    return this.options.visible;
  }

  set visible(val) {
    this.options.visible = val;
  }

  get alpha() {
    return this.options.alpha;
  }

  set alpha(val) {
    this.options.alpha = val;
  }

  get mover() {
    return this.options.mover;
  }

  set mover(val) {
    this.options.mover = val;
  }

  __draw() {}
}
export { IrObject };
