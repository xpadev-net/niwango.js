import { DrawOptionA, DrawOptions, IRender } from "@/@types/IRender";
import { isWide } from "@/context";
import { getCanvas } from "@/contexts/canvas";
import { config } from "@/definition/config";
import { IrObject } from "@/objects/object";

const isDrawOptionA = (i: DrawOptions): i is DrawOptionA =>
  (i as DrawOptionA).baseX !== undefined;

let ids: string[] = [];

class DomRender implements IRender {
  private readonly targetElement: HTMLDivElement;
  private readonly renderElement: HTMLDivElement;
  private readonly innerElement: HTMLDivElement;
  constructor(targetElement: HTMLDivElement) {
    this.targetElement = targetElement;
    targetElement.innerHTML = "";
    const wrapperElement = document.createElement("div");
    wrapperElement.style.width = `${config.canvasWidth}px`;
    wrapperElement.style.height = `${config.canvasHeight}px`;
    wrapperElement.style.transform = `scale(${1920 / config.canvasWidth}, ${
      1080 / config.canvasHeight
    })`;
    wrapperElement.style.transformOrigin = "0 0";
    const innerElement = document.createElement("div");
    innerElement.style.width = `${config.canvasWidth}px`;
    innerElement.style.height = `${config.canvasHeight}px`;
    innerElement.style.position = "relative";
    innerElement.style.margin = "0 auto";
    innerElement.style.overflow = "hidden";
    const renderElement = document.createElement("div");
    renderElement.style.width = `${config.canvasWidth}px`;
    renderElement.style.height = `${config.canvasHeight}px`;
    renderElement.style.position = "relative";
    this.renderElement = renderElement;
    this.innerElement = innerElement;
    this.targetElement.appendChild(wrapperElement);
    wrapperElement.appendChild(innerElement);
    innerElement.appendChild(renderElement);
  }

  public drawImage(item: IrObject, options: DrawOptions) {
    const canvas = getCanvas(item.__id).canvas;
    if (!ids.includes(item.__id)) {
      this.renderElement.appendChild(canvas);
      canvas.style.position = "absolute";
      ids.push(item.__id);
    }
    canvas.style.display = "block";
    canvas.setAttribute("options", JSON.stringify(item));
    canvas.style.zIndex = `${item.z}`;
    this._drawImage(canvas, options);
  }

  private _drawImage(image: HTMLCanvasElement, options: DrawOptions) {
    image.style.left = `${options.targetX}px`;
    image.style.top = `${options.targetY}px`;
    image.style.transform = `rotate(${options.rotate ?? 0}deg)`;
    image.style.transformOrigin = "0 0";
    if (isDrawOptionA(options)) {
      image.style.width = `${options.targetWidth}px`;
      image.style.height = `${options.targetHeight}px`;
    } else {
      image.style.width = `unset`;
      image.style.height = `unset`;
    }
  }

  public apply() {
    if (isWide) {
      this.innerElement.style.width = `${config.stageWidth.full}px`;
      this.renderElement.style.left = "0";
    } else {
      this.innerElement.style.width = `${config.stageWidth.default}px`;
      this.renderElement.style.left = `${
        (config.canvasWidth - config.stageWidth.default) / 2
      }px`;
    }
  }

  public clear() {
    for (const id of ids) {
      const element = document.getElementById(id);
      element && (element.style.display = "none");
    }
    ids = [];
  }
}

export { DomRender };
