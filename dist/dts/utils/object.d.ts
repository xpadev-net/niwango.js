import type { IObjectOptions, IrObjectPos } from "./../@types/IrObject";
declare const AS_TICK_VPOS = 2.5;
declare const SMOOTH_DECAY_DIVISOR = 28;
declare const SMOOTH_MIN_STEP = 1;
declare const getSmoothDuration: (distance: number) => number;
declare const getDistance: (pos1: IrObjectPos, pos2: IrObjectPos) => number;
declare const getOptions: <T extends IObjectOptions>(defaultOptions: T, options: Partial<T>) => T;
export { AS_TICK_VPOS, getDistance, getOptions, getSmoothDuration, SMOOTH_DECAY_DIVISOR, SMOOTH_MIN_STEP, };
