export interface IComment {
  comment: FormattedCommentWithSize;
  invisible: boolean;
  loc: CommentLoc;
  width: number;
  long: number;
  height: number;
  vpos: number;
  flash: boolean;
  posY: number;
  owner: boolean;
  layer: number;
  mail: string[];
  image?: HTMLCanvasElement | null;
  draw: (vpos: number, showCollision: boolean, isDebug: boolean) => void;
}

export type FormattedComment = {
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
export type FormattedCommentWithFont = {
  id: number;
  vpos: number;
  date: number;
  date_usec: number;
  owner: boolean;
  premium: boolean;
  mail: string[];
  user_id: number;
  layer: number;
  loc: CommentLoc;
  size: CommentSize;
  fontSize: number;
  font: CommentFont;
  color: string;
  strokeColor?: string;
  wakuColor?: string;
  full: boolean;
  ender: boolean;
  _live: boolean;
  long: number;
  invisible: boolean;
  content: CommentContentItem[];
  flash: boolean;
  lineCount: number;
  lineOffset: number;
};
export type FormattedCommentWithSize = FormattedCommentWithFont & {
  height: number;
  width: number;
  lineHeight: number;
  resized: boolean;
  resizedX: boolean;
  resizedY: boolean;
  content: CommentMeasuredContentItem[];
  charSize: number;
};
export type CommentContentItem = {
  content: string;
  slicedContent: string[];
  font?: CommentFlashFont;
  width?: number[];
};
export type CommentMeasuredContentItem = CommentContentItem & {
  width: number[];
};
export type CommentFont = "defont" | "mincho" | "gothic" | "gulim" | "simsun";
export type CommentFlashFont = "defont" | "gulim" | "simsun";
export type CommentSize = "big" | "medium" | "small";
export type CommentLoc = "ue" | "naka" | "shita";
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
  scale: number;
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

export type Scripts = {
  type: "script";
  script: A_ANY;
  time: number;
}[];
