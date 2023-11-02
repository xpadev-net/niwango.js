import { IShapeOptions, IShapeOptionsNullable } from "./../@types/IrShape";
import { IrObject } from "./../objects/object";
declare class IrShape extends IrObject {
    options: IShapeOptions;
    readonly __type: string;
    constructor(_options: IShapeOptionsNullable);
    get shape(): import("./../@types/IrShape").IShapeType;
    set shape(val: import("./../@types/IrShape").IShapeType);
    get width(): number;
    set width(val: number);
    get height(): number;
    set height(val: number);
    get mask(): boolean;
    set mask(val: boolean);
    get commentmask(): boolean;
    set commentmask(val: boolean);
    get rotation(): number;
    set rotation(val: number);
    __updateColor(): void;
    __draw(): void;
    draw(): void;
}
export { IrShape };
