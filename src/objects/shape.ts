import type { IObjectMover } from "@/@types/IrObject";
import type { IShapeOptions, IShapeOptionsNullable } from "@/@types/IrShape";
import type { KTMap } from "@/@types/types";
import { render } from "@/context";
import { getCanvas } from "@/contexts/canvas";
import { IrObject } from "@/objects/object";
import { number2color } from "@/utils/number2color";
import { getOptions } from "@/utils/object";
import {
  format,
  getAllowedString,
  getFiniteNumber,
  normalizeFiniteNumbers,
  normalizeStringUnion,
} from "@/utils/utils";

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

const finiteNumberOptionKeys = [
  "x",
  "y",
  "z",
  "width",
  "height",
  "color",
  "scale",
  "alpha",
  "rotation",
] as const satisfies readonly (keyof IShapeOptions)[];

const shapeOptions = ["circle", "rect"] as const;
const moverOptions = ["", "smooth", "simple", "rolling", "hopping"] as const;

const normalizeOptions = (options: IShapeOptionsNullable) => {
  normalizeFiniteNumbers(options, defaultOptions, finiteNumberOptionKeys);
  normalizeStringUnion(options, "shape", shapeOptions, defaultOptions.shape);
  normalizeStringUnion(options, "mover", moverOptions, defaultOptions.mover);
  return options;
};

const assertMaskSupported = (mask: unknown) => {
  if (mask === true) {
    throw new Error("drawShape mask option is not supported");
  }
};

/**
 * 図形オブジェクトのクラス
 */
class IrShape extends IrObject {
  override options: IShapeOptions;
  public override readonly __type: string = "IrShape";
  constructor(_options: IShapeOptionsNullable) {
    const options = normalizeOptions(format(_options, optionTypes));
    assertMaskSupported(options.mask);
    super(options);
    this.options = getOptions(defaultOptions, options);
    this.__width = this.options.width;
    this.__height = this.options.height;
    this.__parsePos();
    this.__draw();
  }

  override get x() {
    return super.x;
  }

  override set x(val: number) {
    super.x = getFiniteNumber(val, defaultOptions.x);
  }

  override get y() {
    return super.y;
  }

  override set y(val: number) {
    super.y = getFiniteNumber(val, defaultOptions.y);
  }

  override get z() {
    return super.z;
  }

  override set z(val: number) {
    super.z = getFiniteNumber(val, defaultOptions.z);
  }

  get shape() {
    return this.options.shape;
  }

  set shape(val) {
    this.options.shape = getAllowedString(
      val,
      shapeOptions,
      defaultOptions.shape,
    );
    this.__modified = true;
  }

  override get width() {
    return this.options.width;
  }

  override set width(val) {
    const value = getFiniteNumber(val, defaultOptions.width);
    this.options.width = value;
    this.__width = value;
    this.__modified = true;
  }

  override get height() {
    return this.options.height;
  }

  override set height(val) {
    const value = getFiniteNumber(val, defaultOptions.height);
    this.options.height = value;
    this.__height = value;
    this.__modified = true;
  }

  protected override get __baseWidth(): number {
    return this.__width * this.scale;
  }

  protected override get __baseHeight(): number {
    return this.__height * this.scale;
  }

  protected override get __commentmask(): boolean {
    return this.options.commentmask;
  }

  override get scale() {
    return super.scale;
  }

  override set scale(val: number) {
    super.scale = getFiniteNumber(val, defaultOptions.scale);
  }

  override get color() {
    return super.color;
  }

  override set color(val: number) {
    super.color = getFiniteNumber(val, defaultOptions.color);
  }

  get mask() {
    return this.options.mask;
  }

  set mask(val) {
    assertMaskSupported(val);
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
    this.options.rotation = getFiniteNumber(val, defaultOptions.rotation);
  }

  override get alpha() {
    return super.alpha;
  }

  override set alpha(val: unknown) {
    super.alpha = getFiniteNumber(
      typeof val === "number" ? val : Number(val),
      defaultOptions.alpha,
    );
  }

  override get mover() {
    return super.mover;
  }

  override set mover(val: IObjectMover) {
    super.mover = getAllowedString(val, moverOptions, defaultOptions.mover);
  }

  override __updateColor() {
    getCanvas(this.__id).context.fillStyle = number2color(this.color);
  }

  override __draw() {
    this.__width = this.options.width;
    this.__height = this.options.height;
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
        Math.PI * 2,
      );
      context.fill();
    }
  }

  override draw() {
    if (!(Math.floor(this.width) > 0 && Math.floor(this.height) > 0)) {
      return;
    }
    if (this.__isModified) this.__draw();
    const targetWidth = this.__baseWidth;
    const targetHeight = this.__baseHeight;
    const options = {
      baseX: 0,
      baseY: 0,
      baseWidth: this.__width,
      baseHeight: this.__height,
      targetX: this.__x,
      targetY: this.__y,
      targetWidth,
      targetHeight,
    };
    if (this.rotation % 360 !== 0) {
      render.drawImage(this, { ...options, rotate: this.rotation });
    } else {
      render.drawImage(this, options);
    }
  }
}

export { IrShape };
