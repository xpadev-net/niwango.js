import { DrawOptionA, DrawOptions, IRender } from "@/@types/IRender";
import { isWide } from "@/context";
import { config } from "@/definition/config";

const isDrawOptionA = (i: DrawOptions): i is DrawOptionA =>
  (i as DrawOptionA).baseX !== undefined;

let ids: string[] = [];

class DomRender implements IRender {
  private readonly targetElement: HTMLDivElement;
  private readonly renderElement: HTMLDivElement;
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
    const renderElement = document.createElement("div");
    renderElement.style.width = `${config.canvasWidth}px`;
    renderElement.style.height = `${config.canvasHeight}px`;
    renderElement.style.position = "relative";
    this.renderElement = renderElement;
    this.targetElement.appendChild(wrapperElement);
    wrapperElement.appendChild(renderElement);
  }

  public drawImage(image: HTMLCanvasElement, options: DrawOptions) {
    if (!ids.includes(image.id)) {
      this.renderElement.appendChild(image);
      image.style.position = "absolute";
      ids.push(image.id);
    }
    image.style.display = "block";
    this._drawImage(image, options);
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
      this.renderElement.style.width = `${config.stageWidth.full}px`;
    } else {
      this.renderElement.style.width = `${config.stageWidth.default}px`;
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
