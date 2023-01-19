import { IrObject } from "@/objects/object";
import { number2color } from "@/utils/number2color";
import { config } from "@/definition/config";
import { parseFont } from "@/utils/utils";
import { measure, parse } from "@/utils/flashText";
import { parsedComment } from "@/@types/flashText";

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

class IrText extends IrObject {
  protected override options: ITextOptions;
  private parsedComment: parsedComment;
  private __actualWidth: number;
  private __actualHeight: number;
  private __scale: number;
  private __size: number;
  constructor(
    _context: CanvasRenderingContext2D,
    _options: ITextOptionsNullable
  ) {
    super(_context, _options);
    this.options = Object.assign({ ...defaultOptions }, _options);
    this.__actualHeight = this.__actualWidth = 0;
    const size = this.options.size * this.options.scale;
    if (size < 10) {
      this.__scale = size / 10;
      this.__size = 10;
    } else {
      this.__scale = 1;
      this.__size = size;
    }
    this.parsedComment = parse(this.text);
    this.__updateContent();
    this.__parsePos();
    this.__updateStyle();
    this.__draw();
  }

  get size() {
    return this.options.size;
  }

  set size(val) {
    const size = val * this.options.scale;
    if (size < 10) {
      this.__scale = size / 10;
      this.__size = 10;
    } else {
      this.__scale = 1;
      this.__size = size;
    }
    this.options.size = val;
    this.__updateStyle();
    this.__measure();
    this.__draw();
  }

  get text() {
    return this.options.text;
  }

  set text(string) {
    this.options.text = string;
    this.__updateContent();
    this.__draw();
  }

  override set scale(val: number) {
    const size = val * this.options.size;
    if (size < 10) {
      this.__scale = size / 10;
      this.__size = 10;
    } else {
      this.__scale = 1;
      this.__size = size;
    }
    this.options.scale = val;
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

  __updateContent() {
    this.parsedComment = parse(this.text);
    this.__measure();
  }

  override __updateStyle() {
    this.__context.font = `normal 600 ${this.__size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
    this.__context.fillStyle = number2color(this.color);
    this.__measure();
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
    if (this.__canvas.width < this.__actualWidth) {
      this.__canvas.width = this.__actualWidth;
    }
    if (this.__canvas.height < this.__actualHeight) {
      this.__canvas.height = this.__actualHeight;
    }
  }

  override __draw() {
    this.__updateStyle();
    this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
    const lineOffset = this.parsedComment.lineOffset;
    let lastFont = this.parsedComment.font,
      leftOffset = 0,
      lineCount = 0;
    for (let i = 0; i < this.parsedComment.content.length; i++) {
      const item = this.parsedComment.content[i];
      if (!item) continue;
      if (lastFont !== (item.font || this.parsedComment.font)) {
        lastFont = item.font || this.parsedComment.font;
        this.__context.font = parseFont(lastFont, this.__size);
      }
      const lines = item.content.split(/[\n\r]/g);
      for (let j = 0; j < lines.length; j++) {
        const line = lines[j];
        if (line === undefined) continue;
        const posY =
          (lineOffset + lineCount + 1) * (this.__size * config.lineHeight) +
          config.commentYPaddingTop +
          this.__size * config.lineHeight * config.commentYOffset;
        //this.__context.strokeText(line, leftOffset, posY);
        this.__context.fillText(line, leftOffset, posY);
        if (j < lines.length - 1) {
          leftOffset = 0;
          lineCount += 1;
        } else {
          leftOffset += item.width?.[j] || 0;
        }
      }
    }
  }

  override draw() {
    this.targetContext.drawImage(
      this.__canvas,
      0,
      0,
      this.__actualWidth,
      this.__actualHeight,
      this.__x,
      this.__y,
      this.__width,
      this.__height
    );
  }
}
export { IrText };
