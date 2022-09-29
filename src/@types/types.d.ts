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
type IObjectOptions = {
  x: number;
  y: number;
  z: number;
  pos: string;
  color: number;
  visible: boolean;
  alpha: number;
  mover: IObjectMover;
};
type IObjectOptionsNullable = {
  x?: number;
  y?: number;
  z?: number;
  pos?: string;
  color?: number;
  visible?: boolean;
  alpha?: number;
  mover?: IObjectMover;
};
type ITextOptions = {
  text: string;
  size: number;
  bold: boolean;
  filter: ITextFilter;
} & IObjectOptions;
type ITextOptionsNullable = {
  text?: string;
  size?: number;
  bold?: boolean;
  filter?: ITextFilter;
} & IObjectOptionsNullable;
type IShapeOptions = {
  shape: IShapeType;
  width: number;
  height: number;
  mask: boolean;
  commentmask: boolean;
  rotation: number;
} & IObjectOptions;
type IShapeOptionsNullable = {
  shape?: IShapeType;
  width?: number;
  height?: number;
  mask?: boolean;
  commentmask?: boolean;
  rotation?: number;
} & IObjectOptionsNullable;
