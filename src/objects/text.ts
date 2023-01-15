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
  filter: "",
  alpha: 0,
  mover: "",
};

class IrText extends IrObject {
  override options: ITextOptions;
  private parsedComment: parsedComment;
  constructor(
    _context: CanvasRenderingContext2D,
    _options: ITextOptionsNullable
  ) {
    super(_context, _options);
    this.options = Object.assign({ ...defaultOptions }, _options);
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
    this.__context.font = `normal 600 ${this.size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
    this.__context.fillStyle = number2color(this.color);
    this.__measure();
  }

  __measure() {
    const result = measure(this.__context, {
      ...this.parsedComment,
      size: this.size,
    });
    this.__width = result.width;
    this.__height = result.height;
    if (this.__canvas.width < this.__width) {
      this.__canvas.width = this.__width;
    }
    if (this.__canvas.height < this.__height) {
      this.__canvas.height = this.__height;
    }
  }

  override __draw() {
    console.log(this.parsedComment);
    this.__context.clearRect(0, 0, this.__canvas.width, this.__canvas.height);
    this.__updateStyle();
    console.log(this.__canvas.width, this.__canvas.height);
    this.__context.strokeStyle = "rgba(0,0,0,0.4)";
    this.__context.font = parseFont(this.parsedComment.font, this.size);
    this.__context.fillStyle = ("000000" + this.color.toString(16)).slice(-6);
    const lineOffset = this.parsedComment.lineOffset;
    let lastFont = this.parsedComment.font,
      leftOffset = 0,
      lineCount = 0;
    for (let i = 0; i < this.parsedComment.content.length; i++) {
      const item = this.parsedComment.content[i];
      if (!item) continue;
      if (lastFont !== (item.font || this.parsedComment.font)) {
        lastFont = item.font || this.parsedComment.font;
        this.__context.font = parseFont(lastFont, this.size);
      }
      const lines = item.content.split("\n");
      for (let j = 0; j < lines.length; j++) {
        const line = lines[j];
        if (line === undefined) continue;
        const posY =
          (lineOffset + lineCount + 1) * (this.size * config.lineHeight) +
          config.commentYPaddingTop +
          this.size * config.lineHeight * config.commentYOffset;
        this.__context.strokeText(line, leftOffset, posY);
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
    this.targetContext.drawImage(this.__canvas, this.__x, this.__y);
  }
}
export { IrText };
