import { DrawOptions, IRender } from "./../@types/IRender";
import { IrObject } from "./../objects/object";
declare class CanvasRender implements IRender {
    private readonly targetCanvas;
    private readonly targetContext;
    private readonly renderCanvas;
    private readonly renderContext;
    constructor(targetCanvas: HTMLCanvasElement);
    drawImage(item: IrObject, options: DrawOptions): void;
    private _drawImage;
    apply(clear: boolean): void;
    private drawLetterBox;
    clear(): void;
}
export { CanvasRender };
