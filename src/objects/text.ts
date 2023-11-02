import { parsedComment } from "@/@types/flashText";
import { ITextOptions, ITextOptionsNullable } from "@/@types/IrText";
import { KTMap } from "@/@types/types";
import { render } from "@/context";
import { getCanvas } from "@/contexts/canvas";
import { config } from "@/definition/config";
import { IrObject } from "@/objects/object";
import { measure, parse } from "@/utils/flashText";
import { number2color } from "@/utils/number2color";
import { getOptions } from "@/utils/object";
import { format, getValue, parseFont } from "@/utils/utils";

const optionTypes: KTMap<keyof ITextOptions> = {
  text: "string",
  x: "number",
  y: "number",
  z: "number",
  size: "number",
  pos: "string",
  posX: "string",
  posY: "string",
  color: "number",
  bold: "boolean",
  visible: "boolean",
  scale: "number",
  filter: "string",
  alpha: "number",
  mover: "string",
};

const defaultOptions: ITextOptions = {
  text: "",
  x: 0,
  y: 0,
  z: 0,
  size: 14,
  pos: "naka",
  posX: "naka",
  posY: "naka",
  color: 0,
  bold: false,
  visible: true,
  scale: 1,
  filter: "",
  alpha: 0,
  mover: "",
};

/**
 * テキストオブジェクトのクラス
 */
class IrText extends IrObject {
  protected override options: ITextOptions;
  private parsedComment: parsedComment;
  private __actualWidth: number;
  private __actualHeight: number;
  private __scale: number;
  private __size: number;
  private __reverse: boolean;
  public override readonly __type: string = "IrText";
  constructor(_options: ITextOptionsNullable) {
    const options = format(_options, optionTypes);
    super(options);
    this.options = getOptions(defaultOptions, options);
    this.__actualHeight = this.__actualWidth = 0;
    const size = this.options.size * this.options.scale;
    this.__reverse = size < 0;
    if (Math.abs(size) < 10) {
      this.__scale = Math.max(Math.abs(size / 10), 0.16);
      this.__size = 10;
    } else {
      this.__scale = 1;
      this.__size = Math.abs(size);
    }
    this.parsedComment = parse(this.text, this.options.size < 3);
    this.__updateColor();
    this.__updateFont();
    this.__parsePos();
    this.__measure();
    this.__draw();
  }

  get size() {
    return this.options.size;
  }

  set size(val) {
    if (this.options.size < 3 !== val < 3) {
      this.parsedComment = parse(this.text, val < 3);
    }
    const size = Math.abs(val * this.options.scale);
    if (size < 10) {
      this.__scale = Math.max(size / 10, 0.16);
      this.__size = 10;
    } else if (size > 100 && val >= 3) {
      this.__scale = size / 100;
      this.__size = 100;
    } else {
      this.__scale = 1;
      this.__size = size;
    }
    this.options.size = val;
    this.__updateFont();
    this.parsedComment = parse(this.text, val < 3);
    this.__modified = true;
  }

  get text() {
    return this.options.text;
  }

  //なぜか親のscaleが呼ばれないのでオーバーライド
  override get scale() {
    this.__filterMoverQueue();
    const currentQueue = this.moverQueue[0];
    if (this.mover === "hopping" && currentQueue) {
      return (
        this.options.scale *
        this.calcMover(currentQueue, this.options.x, "scale")
      );
    }
    return this.options.scale;
  }

  set text(string) {
    this.options.text = `${string}`;
    this.parsedComment = parse(this.text, this.options.size < 3);
    this.__modified = true;
  }

  override set scale(val: number) {
    const size = Math.abs(val * this.options.size);
    this.__reverse = val < 0;
    if (size < 10) {
      this.__scale = Math.max(size / 10, 0.16);
      this.__size = 10;
    } else if (size > 100 && this.options.size >= 3) {
      this.__scale = size / 100;
      this.__size = 100;
    } else {
      this.__scale = 1;
      this.__size = size;
    }
    this.options.scale = val;
    this.__updateFont();
    this.__modified = true;
  }

  get bold() {
    return this.options.bold;
  }

  set bold(val) {
    this.options.bold = val;
    this.__modified = true;
  }

  get filter() {
    return this.options.filter;
  }

  set filter(val) {
    this.options.filter = val;
    this.__modified = true;
  }

  __updateFont() {
    getCanvas(
      this.__id,
    ).context.font = `normal 600 ${this.__size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
  }

  override __updateColor() {
    getCanvas(this.__id).context.fillStyle = number2color(this.color);
  }

  __measure() {
    const size = Math.abs(this.size * this.scale);
    if (size < 10) {
      this.__scale = Math.max(size / 10, 0.16);
      this.__size = 10;
    } else if (size > 100 && this.size >= 3) {
      this.__scale = size / 100;
      this.__size = 100;
    } else {
      this.__scale = 1;
      this.__size = size;
    }
    this.__updateFont();
    const result = measure(getCanvas(this.__id).context, {
      ...this.parsedComment,
      size: this.__size,
    });
    this.__actualWidth = result.width;
    this.__actualHeight = result.height;
    this.__width = this.__actualWidth * this.__scale;
    this.__height = this.__actualHeight * this.__scale;
    const { canvas } = getCanvas(this.__id);
    canvas.width = this.__actualWidth;
    canvas.height = this.__actualHeight;
  }

  override __draw() {
    this.__modified = false;
    this.__updateColor();
    const { canvas, context } = getCanvas(this.__id);
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (this.__reverse) {
      context.scale(-1, -1);
    } else {
      context.scale(1, 1);
    }
    const lineOffset = this.parsedComment.lineOffset;
    context.font = parseFont(this.parsedComment.font, this.__size);
    context.globalAlpha = (100 - this.options.alpha) / 100;
    let lastFont = this.parsedComment.font;
    let leftOffset = 0;
    let lineCount = 0;
    const reverseOffset = this.__reverse ? this.__actualWidth : 0;
    for (const item of this.parsedComment.content) {
      if (lastFont !== getValue(item.font, this.parsedComment.font)) {
        lastFont = getValue(item.font, this.parsedComment.font);
        context.font = parseFont(lastFont, this.__size);
      }
      if (item.type === "normal") {
        const lines = item.content.split(/[\n\r]/g);
        lines.forEach((line, index) => {
          const posX = leftOffset - reverseOffset;
          const posY =
            (lineOffset + lineCount + 1) * (this.__size * config.lineHeight) +
            config.commentYPaddingTop +
            this.__size * config.lineHeight * config.commentYOffset -
            reverseOffset;
          if (this.filter === "fuchi") {
            context.lineWidth = 4;
            context.strokeText(line, posX, posY);
          }
          context.fillText(line, posX, posY);
          if (index === lines.length - 1) {
            leftOffset += getValue(item.width?.[index], 0);
            return;
          }
          leftOffset = 0;
          lineCount += 1;
        });
        continue;
      }
      item.content.forEach((part, index) => {
        const posX = leftOffset - reverseOffset;
        const posY =
          (lineOffset + lineCount + 1) * (this.__size * config.lineHeight) +
          config.commentYPaddingTop +
          this.__size * config.lineHeight * config.commentYOffset -
          reverseOffset;
        switch (part.type) {
          case "fill": {
            if (this.filter === "fuchi") {
              context.strokeRect(
                posX,
                posY,
                part.width * this.__size,
                this.__size * config.lineHeight,
              );
            }
            context.fillRect(
              posX,
              posY,
              part.width * this.__size,
              this.__size * config.lineHeight,
            );
            break;
          }
          case "text":
            if (this.filter === "fuchi") {
              context.strokeText(part.text, posX, posY);
            }
            context.fillText(part.text, posX, posY);
        }
        leftOffset += getValue(item.width?.[index], 0);
      });
    }
    if (this.filter === "kasumi") {
      this.kasumi();
    }
  }

  override draw() {
    if (this.__isModified) this.__measure();
    if (!(this.width > 0 && this.height > 0)) {
      return;
    }
    if (this.__isModified) this.__draw();
    render.drawImage(this, {
      baseX: 0,
      baseY: 0,
      baseWidth: this.__actualWidth,
      baseHeight: this.__actualHeight,
      targetX: this.__x,
      targetY: this.__y + this.__size / 16,
      targetWidth: this.__width,
      targetHeight: this.__height,
    });
  }

  private kasumi() {
    const { canvas, context } = getCanvas(this.__id);
    const canvasBlur050 = document.createElement("canvas");
    canvasBlur050.width = canvas.width * 0.5;
    canvasBlur050.height = canvas.height * 0.5;
    const canvasBlur025 = document.createElement("canvas");
    canvasBlur025.width = canvas.width * 0.25;
    canvasBlur025.height = canvas.height * 0.25;
    canvasBlur025
      .getContext("2d")
      ?.drawImage(
        canvas,
        0,
        0,
        canvas.width,
        canvas.height,
        0,
        0,
        canvasBlur025.width,
        canvasBlur025.height,
      );
    canvasBlur050
      .getContext("2d")
      ?.drawImage(
        canvasBlur025,
        0,
        0,
        canvasBlur025.width,
        canvasBlur025.height,
        0,
        0,
        canvasBlur050.width,
        canvasBlur050.height,
      );
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      canvasBlur050,
      0,
      0,
      canvasBlur050.width,
      canvasBlur050.height,
      0,
      0,
      canvas.width,
      canvas.height,
    );
  }
}
export { IrText };
