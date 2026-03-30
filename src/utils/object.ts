import { IObjectOptions, IrObjectPos } from "@/@types/IrObject";

// AS 40fps frame timing: 1 tick = 2.5 vpos
const AS_TICK_VPOS = 2.5;
// AS smooth mover: velocity = remaining / 28 + 1 per tick
const SMOOTH_DECAY_DIVISOR = 28;
const SMOOTH_MIN_STEP = 1;

const getSmoothDuration = (distance: number) => {
  let step = 0;
  while (distance > 0) {
    distance -= distance / SMOOTH_DECAY_DIVISOR + SMOOTH_MIN_STEP;
    step++;
  }
  return step * AS_TICK_VPOS;
};

const getDistance = (pos1: IrObjectPos, pos2: IrObjectPos) => {
  return Math.sqrt(Math.pow(pos2.x - pos1.x, 2) + Math.pow(pos2.y - pos1.y, 2));
};

const getOptions = <T extends IObjectOptions>(
  defaultOptions: T,
  options: Partial<T>,
) => {
  let result = { ...defaultOptions };
  for (const _key of Object.keys(defaultOptions)) {
    const key = _key as keyof T;
    const value = options[key];
    if (value === undefined) {
      continue;
    }
    result = { ...result, [_key]: value };
  }
  return result;
};

export { getDistance, getOptions, getSmoothDuration };
