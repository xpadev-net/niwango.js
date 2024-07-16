import { IObjectOptions, IrObjectPos } from "./../@types/IrObject";
declare const getSmoothDuration: (distance: number) => number;
declare const getDistance: (pos1: IrObjectPos, pos2: IrObjectPos) => number;
declare const getOptions: <T extends IObjectOptions>(defaultOptions: T, options: Partial<T>) => T;
export { getDistance, getOptions, getSmoothDuration };
