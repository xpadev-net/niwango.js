import { IRender } from "@/@types/IRender";
import {
  IShapeLiteral,
  IShapeOptions,
  IShapeOptionsNullable,
} from "@/@types/IrShape";
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
  scale: 1,
  alpha: 0,
  rotation: 0,
  mover: "",
};

/**
 * 図形オブジェクトのクラス
 */
class IrShape extends IrObject {
  override options: IShapeOptions;
  constructor(_render: IRender, _options: IShapeOptionsNullable) {
    super(_render, _options);
    this.options = { ...defaultOptions, ..._options };
    this.__width = this.options.width;
    this.__height = this.options.height;
    this.__parsePos();
    this.__draw();
  }

  get shape() {
    return this.options.shape;
  }

  set shape(val) {
    this.options.shape = val;
    this.__modified = true;
  }

  override get width() {
    return this.options.width;
  }

  override set width(val) {
    this.options.width = val;
    this.__width = val * this.options.scale;
    this.__modified = true;
  }

  override get height() {
    return this.options.height;
  }

  override set height(val) {
    this.options.height = val;
    this.__height = val * this.options.scale;
    this.__modified = true;
  }

  override get scale() {
    return this.options.scale;
  }

  override set scale(val) {
    this.options.scale = val;
    this.__width = this.options.width * val;
    this.__modified = true;
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

  override __updateColor() {
    this.__context.fillStyle = number2color(this.color);
  }

  override __draw() {
    this.__modified = false;
    this.__canvas.width = this.__width;
    this.__canvas.height = this.__height;
    this.__updateColor();
    this.__context.globalAlpha = (100 - this.options.alpha) / 100;
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

  override draw() {
    if (!(Math.floor(this.width) > 0 && Math.floor(this.height) > 0)) {
      return;
    }
    if (this.__modified) this.__draw();
    if (this.rotation % 360 !== 0) {
      this.render.drawImage(this, {
        targetX: this.__x,
        targetY: this.__y,
        rotate: this.rotation,
      });
    } else {
      this.render.drawImage(this, {
        targetX: this.__x,
        targetY: this.__y,
      });
    }
  }

  public toJSON(): IShapeLiteral {
    return {
      __NIWANGO_LITERAL: "IrShape",
      type: "IrShape",
      options: this.options,
    };
  }
}
export { IrShape };
