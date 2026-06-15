import type { DrawOptions, IRender } from "./../@types/IRender";
import type { IrObject } from "./../objects/object";
declare class DomRender implements IRender {
    private readonly targetElement;
    private readonly renderElement;
    private readonly innerElement;
    private ids;
    constructor(targetElement: HTMLDivElement);
    drawImage(item: IrObject, options: DrawOptions): void;
    private _drawImage;
    apply(): void;
    clear(): void;
}
export { DomRender };
