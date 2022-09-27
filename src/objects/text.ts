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
  mover: ""
}

class IrText {
  private readonly context: CanvasRenderingContext2D;
  private options: ITextOptions;

  constructor(context: CanvasRenderingContext2D, options: ITextOptionsNullable) {
    this.context = context;
    this.context.textAlign = "start";
    this.context.textBaseline = "alphabetic";
    this.context.lineWidth = 4;
    this.options = Object.assign(defaultOptions, options);
  }

  get x() {
    return this.options.x;
  }

  set x(val) {
    this.options.x = val;
  }

  get y() {
    return this.options.y;
  }

  set y(val) {
    this.options.y = val;
  }

  get z() {
    return this.options.z
  }

  set z(val) {
    this.options.z = val
  }

  get size(){
    return this.options.size
  }

  set size(val){
    this.options.size = val;
  }

  get text() {
    return this.options.text;
  }

  set text(val) {
    this.options.text = val;
  }

  __font(){
    this.context.font = `normal 600 ${this.size}px Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic`;
  }

  __draw() {
    this.context.fillText(this.text, this.x, this.y);
  }

}

export {IrText};