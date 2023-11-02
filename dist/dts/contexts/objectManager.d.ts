import { IrObject } from "./../objects/object";
declare let drawObjects: IrObject[];
declare const draw: () => void;
declare const register: (item: IrObject) => void;
declare const resetObjects: () => void;
export { draw, drawObjects, register, resetObjects };
