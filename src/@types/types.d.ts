type formattedComment = {
  id: number;
  vpos: number;
  content: string;
  date: number;
  date_usec: number;
  owner: boolean;
  premium: boolean;
  mail: string[];
  user_id: number;
  layer: number;
};
type ITextFilter = "" | "fuchi" | "kasumi" | "kage";
type IShapeType = "circle" | "rect";
type IObjectMover = "" | "smooth" | "simple" | "rolling" | "hopping";
type IObjectPosX = "naka" | "migi" | "hidari";
type IObjectPosY = "naka" | "ue" | "shita";
type IObjectOptions = {
  x: number;
  y: number;
  z: number;
  pos: string;
  posX: IObjectPosX;
  posY: IObjectPosY;
  color: number;
  visible: boolean;
  alpha: number;
  mover: IObjectMover;
};
type ITextOptions = {
  text: string;
  size: number;
  bold: boolean;
  filter: ITextFilter;
} & IObjectOptions;
type ITextOptionsNullable = Partial<ITextOptions>;
type IShapeOptions = {
  shape: IShapeType;
  width: number;
  height: number;
  mask: boolean;
  commentmask: boolean;
  rotation: number;
} & IObjectOptions;
type IShapeOptionsNullable = Partial<IShapeOptions>;
