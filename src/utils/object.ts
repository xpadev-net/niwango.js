import { IObjectOptions, IrObjectPos } from "@/@types/IrObject";

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

const getOptions = <T extends IObjectOptions>(
  defaultOptions: T,
  options: Partial<T>
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

export { getDistance, getOptions,getSmoothDuration };
