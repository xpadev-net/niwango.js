export type IrObjectMoverQueue = IrObjectMoverItem[];

export type IrObjectPos = {
  x: number;
  y: number;
};

export type IrObjectMoverItem = {
  current: IrObjectPos;
  target: IrObjectPos;
  diff: IrObjectPos;
  vpos: number;
  duration: number;
};

export type IObjectMover = "" | "smooth" | "simple" | "rolling" | "hopping";
export type IObjectPosX = "naka" | "migi" | "hidari";
export type IObjectPosY = "naka" | "ue" | "shita";
export type IObjectOptions = {
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
  __id?: string;
};
