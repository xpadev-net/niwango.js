import { IrObject } from "@/objects/object";

const defaultOptions: IShapeOptions = {
  x: 0,
  y: 0,
  z: 0,
  shape: "circle",
  width: 30,
  height: 30,
  pos: "naka",
  color: 16777215,
  visible: true,
  mask: false,
  commentmask: false,
  alpha: 0,
  rotation: 0,
  mover: "",
};

class IrShape extends IrObject {
  options: IShapeOptions;
  constructor(
    _context: CanvasRenderingContext2D,
    _options: IShapeOptionsNullable
  ) {
    super(_context, _options);
    this.options = Object.assign(defaultOptions, _options);
  }

  get shape() {
    return this.options.shape;
  }

  set shape(val) {
    this.options.shape = val;
  }

  get width() {
    return this.options.width;
  }

  set width(val) {
    this.options.width = val;
  }

  get height() {
    return this.options.height;
  }

  set height(val) {
    this.options.height = val;
  }

  get mask() {
    return this.options.mask;
  }

  set mask(val) {
    this.options.mask = val;
  }

  get commentmask() {
    return this.options.commentmask;
  }

  set commentmask(val) {
    this.options.commentmask = val;
  }

  get rotation() {
    return this.options.rotation;
  }

  set rotation(val) {
    this.options.rotation = val;
  }

  __draw() {
    this.context.fillText(this.text, this.x, this.y);
  }
}
export { IrShape };
