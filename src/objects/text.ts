import { cloneDeep } from "lodash";

import { parsedComment } from "@/@types/flashText";
import { IRender } from "@/@types/IRender";
import {
  ITextLiteral,
  ITextOptions,
  ITextOptionsNullable,
} from "@/@types/IrText";
import { config } from "@/definition/config";
import { IrObject } from "@/objects/object";
import { measure, parse } from "@/utils/flashText";
import { number2color } from "@/utils/number2color";
import { getValue, parseFont } from "@/utils/utils";

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
  constructor(_render: IRender, _options: ITextOptionsNullable) {
    super(_render, _options);
    this.options = Object.assign({ ...defaultOptions }, _options);
    this.__context.strokeStyle = "#000000";
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
    if (this.options.size < 3 !== val < 3) {
      this.parsedComment = parse(this.text, val < 3);
    }
    const size = Math.abs(val * this.options.scale);
    if (size < 10) {
      this.__scale = size / 10;
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

  set text(string) {
    this.options.text = `${string}`;
    this.parsedComment = parse(this.text, this.options.size < 3);
    this.__modified = true;
  }

  override get scale() {
    return this.options.scale;
  }

  override set scale(val: number) {
    const size = Math.abs(val * this.options.size);
    this.__reverse = val < 0;
    if (size < 10) {
      this.__scale = size / 10;
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
    this.__modified = false;
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
          if (this.filter === "fuchi") {
            this.__context.lineWidth = 4;
            this.__context.strokeText(line, posX, posY);
          }
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
            if (this.filter === "fuchi") {
              this.__context.strokeRect(
                posX,
                posY,
                part.width * this.__size,
                this.__size * config.lineHeight
              );
            }
            this.__context.fillRect(
              posX,
              posY,
              part.width * this.__size,
              this.__size * config.lineHeight
            );
            break;
          }
          case "text":
            if (this.filter === "fuchi") {
              this.__context.strokeText(part.text, posX, posY);
            }
            this.__context.fillText(part.text, posX, posY);
        }
        leftOffset += getValue(item.width?.[index], 0);
      });
    }
    if (this.filter === "kasumi") {
      this.kasumi();
    }
  }

  override draw() {
    if (this.__modified) this.__measure();
    if (!(this.width > 0 && this.height > 0)) {
      return;
    }
    if (this.__modified) this.__draw();
    this.render.drawImage(this, {
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
    const canvasBlur050 = document.createElement("canvas");
    canvasBlur050.width = this.__canvas.width * 0.5;
    canvasBlur050.height = this.__canvas.height * 0.5;
    const canvasBlur025 = document.createElement("canvas");
    canvasBlur025.width = this.__canvas.width * 0.25;
    canvasBlur025.height = this.__canvas.height * 0.25;
    canvasBlur025
      .getContext("2d")
      ?.drawImage(
        this.__canvas,
        0,
        0,
        this.__canvas.width,
        this.__canvas.height,
        0,
        0,
        canvasBlur025.width,
        canvasBlur025.height
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
        canvasBlur050.height
      );
    this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
    this.__context.drawImage(
      canvasBlur050,
      0,
      0,
      canvasBlur050.width,
      canvasBlur050.height,
      0,
      0,
      this.__canvas.width,
      this.__canvas.height
    );
  }

  public override toJSON(): ITextLiteral {
    return {
      __NIWANGO_LITERAL: "IrText",
      type: "IrText",
      options: cloneDeep(this.options),
    };
  }
}
export { IrText };
