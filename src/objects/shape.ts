import { IrObject } from "@/objects/object";
import { number2color } from "@/utils/number2color";

const defaultOptions: IShapeOptions = {
  x: 0,
  y: 0,
  z: 0,
  shape: "circle",
  width: 30,
  height: 30,
  pos: "naka",
  posX: "naka",
  posY: "naka",
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
    this.options = Object.assign({ ...defaultOptions }, _options);
    this.__width = this.options.width;
    this.__height = this.options.height;
    this.__parsePos();
    this.__updateStyle();
    this.__draw();
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
    this.__width = val;
  }

  get height() {
    return this.options.height;
  }

  set height(val) {
    this.options.height = val;
    this.__height = val;
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

  __updateStyle() {
    this.__context.fillStyle = number2color(this.color);
  }

  __draw() {
    this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
    if (this.shape === "rect") {
      this.__context.fillRect(0, 0, this.width, this.height);
    } else {
      this.__context.beginPath();
      this.__context.ellipse(
        this.width / 2,
        this.height / 2,
        this.width / 2,
        this.height / 2,
        0,
        0,
        360
      );
      this.__context.fill();
    }
  }

  draw() {
    this.targetContext.drawImage(this.__canvas, this.__x, this.__y);
  }
}
export { IrShape };
