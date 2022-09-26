const defaultOptions:ITextOptions = {
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
  private readonly context:CanvasRenderingContext2D;
  private options: ITextOptions;
  constructor(context:CanvasRenderingContext2D, options:ITextOptionsNullable) {
    this.context = context;
    this.options = Object.assign(defaultOptions,options);
  }
  __draw(){
    let x = this.x;
    this.context.fillText(this.text,this.x,this.y)
  }

}
export {IrText};