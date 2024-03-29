import { IShapeOptions, IShapeOptionsNullable } from "@/@types/IrShape";
import { KTMap } from "@/@types/types";
import { render } from "@/context";
import { getCanvas } from "@/contexts/canvas";
import { IrObject } from "@/objects/object";
import { number2color } from "@/utils/number2color";
import { getOptions } from "@/utils/object";
import { format } from "@/utils/utils";

const optionTypes: KTMap<keyof IShapeOptions> = {
  x: "number",
  y: "number",
  z: "number",
  shape: "string",
  width: "number",
  height: "number",
  pos: "string",
  posX: "string",
  posY: "string",
  color: "number",
  visible: "boolean",
  mask: "boolean",
  commentmask: "boolean",
  scale: "number",
  alpha: "number",
  rotation: "number",
  mover: "string",
};

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
  public override readonly __type: string = "IrShape";
  constructor(_options: IShapeOptionsNullable) {
    const options = format(_options, optionTypes);
    super(options);
    this.options = getOptions(defaultOptions, options);
    this.__width = this.options.width * this.options.scale;
    this.__height = this.options.height * this.options.scale;
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
    getCanvas(this.__id).context.fillStyle = number2color(this.color);
  }

  override __draw() {
    this.__width = this.options.width * this.scale;
    this.__height = this.options.height * this.scale;
    this.__modified = false;
    const { canvas, context } = getCanvas(this.__id);
    canvas.width = this.__width;
    canvas.height = this.__height;
    this.__updateColor();
    context.globalAlpha = (100 - this.options.alpha) / 100;
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (this.shape === "rect") {
      context.fillRect(0, 0, this.__width, this.__height);
    } else {
      context.beginPath();
      context.ellipse(
        this.__width / 2,
        this.__height / 2,
        this.__width / 2,
        this.__height / 2,
        0,
        0,
        360,
      );
      context.fill();
    }
  }

  override draw() {
    if (!(Math.floor(this.width) > 0 && Math.floor(this.height) > 0)) {
      return;
    }
    if (this.__isModified) this.__draw();
    if (this.rotation % 360 !== 0) {
      render.drawImage(this, {
        targetX: this.__x,
        targetY: this.__y,
        rotate: this.rotation,
      });
    } else {
      render.drawImage(this, {
        targetX: this.__x,
        targetY: this.__y,
      });
    }
  }
}

export { IrShape };
