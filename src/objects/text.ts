import { IrObject } from "@/objects/object";
import { number2color } from "@/utils/number2color";
import { config } from "@/definition/config";
import { getValue, parseFont } from "@/utils/utils";
import { measure, parse } from "@/utils/flashText";
import { parsedComment } from "@/@types/flashText";
import { ITextOptions, ITextOptionsNullable } from "@/@types/types";

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
  constructor(_context: CanvasRenderingContext2D, _options: ITextOptionsNullable) {
    super(_context, _options);
    this.options = Object.assign({ ...defaultOptions }, _options);
    this.__actualHeight = this.__actualWidth = 0;
    const size = this.options.size * this.options.scale;
    this.__reverse = size < 0;
    if (Math.abs(size) < 10) {
      this.__scale = Math.abs(size / 10);
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
    const size = val * this.options.scale;
    this.__reverse = size < 0;
    if (Math.abs(size) < 10) {
      this.__scale = Math.abs(size) / 10;
      this.__size = 10;
    } else {
      this.__scale = 1;
      this.__size = Math.abs(size);
    }
    this.options.size = val;
    this.__updateFont();
    this.parsedComment = parse(this.text, val < 3);
    this.__measure();
    this.__draw();
  }

  get text() {
    return this.options.text;
  }

  set text(string) {
    this.options.text = string;
    this.parsedComment = parse(this.text, this.options.size < 3);
    this.__measure();
    this.__draw();
  }

  override get scale() {
    return this.options.scale;
  }

  override set scale(val: number) {
    const size = val * this.options.size;
    this.__reverse = size < 0;
    if (Math.abs(size) < 10) {
      this.__scale = Math.abs(size) / 10;
      this.__size = 10;
    } else {
      this.__scale = 1;
      this.__size = Math.abs(size);
    }
    this.options.scale = val;
    this.__updateFont();
    this.__measure();
    this.__draw();
  }

  get bold() {
    return this.options.bold;
  }

  set bold(val) {
    this.options.bold = val;
  }

  get filter() {
    return this.options.filter;
  }

  set filter(val) {
    this.options.filter = val;
  }

  __updateFont() {
    this.__context.font = `normal 600 ${this.__size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
  }

  override __updateColor() {
    this.__context.fillStyle = number2color(this.color);
  }

  __measure() {
    const result = measure(this.__context, {
      ...this.parsedComment,
      size: this.__size,
    });
    this.__actualWidth = result.width;
    this.__actualHeight = result.height;
    this.__width = this.__actualWidth * this.__scale;
    this.__height = this.__actualHeight * this.__scale;
    this.__canvas.width = this.__actualWidth;
    this.__canvas.height = this.__actualHeight;
  }

  override __draw() {
    this.__updateColor();
    this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
    if (this.__reverse) {
      this.__context.scale(-1, -1);
    } else {
      this.__context.scale(1, 1);
    }
    const lineOffset = this.parsedComment.lineOffset;
    this.__context.font = parseFont(this.parsedComment.font, this.__size);
    this.__context.globalAlpha = (100 - this.options.alpha) / 100;
    let lastFont = this.parsedComment.font;
    let leftOffset = 0;
    let lineCount = 0;
    const reverseOffset = this.__reverse ? this.__actualWidth : 0;
    for (const item of this.parsedComment.content) {
      if (lastFont !== getValue(item.font, this.parsedComment.font)) {
        lastFont = getValue(item.font, this.parsedComment.font);
        this.__context.font = parseFont(lastFont, this.__size);
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
          this.__context.fillText(line, posX, posY);
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
            this.__context.fillRect(posX, posY, part.width * this.__size, this.__size * config.lineHeight);
            break;
          }
          case "text":
            this.__context.fillText(part.text, posX, posY);
        }
        leftOffset += getValue(item.width?.[index], 0);
      });
    }
  }

  override draw() {
    if (!(this.width > 0 && this.height > 0)) {
      return;
    }
    this.targetContext.drawImage(
      this.__canvas,
      0,
      0,
      this.__actualWidth,
      this.__actualHeight,
      this.__x,
      this.__y,
      this.__width,
      this.__height,
    );
  }
}
export { IrText };
