import { IrObject } from "@/objects/object";

const defaultOptions: ITextOptions = {
  text: "",
  x: 0,
  y: 0,
  z: 0,
  size: 14,
  pos: "naka",
  color: 0,
  bold: false,
  visible: true,
  filter: "",
  alpha: 0,
  mover: "",
};

class IrText extends IrObject {
  options: ITextOptions;
  constructor(
    _context: CanvasRenderingContext2D,
    _options: ITextOptionsNullable
  ) {
    super(_context, _options);
    this.options = Object.assign(defaultOptions, _options);
  }

  get size() {
    return this.options.size;
  }

  set size(val) {
    this.options.size = val;
  }

  get text() {
    return this.options.text;
  }

  set text(val) {
    this.options.text = val;
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

  __font() {
    this.context.font = `normal 600 ${this.size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
  }

  __draw() {
    this.context.fillText(this.text, this.x, this.y);
  }
}
export { IrText };
