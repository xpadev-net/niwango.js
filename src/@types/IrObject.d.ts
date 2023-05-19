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
