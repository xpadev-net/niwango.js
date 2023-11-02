import { DrawOptions, IRender } from "./../@types/IRender";
import { IrObject } from "./../objects/object";
declare class DomRender implements IRender {
    private readonly targetElement;
    private readonly renderElement;
    private readonly innerElement;
    constructor(targetElement: HTMLDivElement);
    drawImage(item: IrObject, options: DrawOptions): void;
    private _drawImage;
    apply(): void;
    clear(): void;
}
export { DomRender };
