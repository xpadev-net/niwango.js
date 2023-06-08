import { IrObjectPos } from "@/@types/IrObject";

const getSmoothDuration = (distance: number) => {
  let step = 0;
  while (distance > 0) {
    distance -= distance / 14 + 1;
    step++;
  }
  return step * 5;
};

const getDistance = (pos1: IrObjectPos, pos2: IrObjectPos) => {
  return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
};

export { getDistance,getSmoothDuration };
