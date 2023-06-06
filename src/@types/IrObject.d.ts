export type IrObjectMoverQueue = {
  x: IrObjectMoverItem[];
  y: IrObjectMoverItem[];
};

export type IrObjectMoverItem = {
  current: number;
  target: number;
  diff: number;
  vpos: number;
};

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
