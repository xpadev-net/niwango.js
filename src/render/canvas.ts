import type { DrawOptionA, DrawOptions, IRender } from "@/@types/IRender";
import { isWide } from "@/context";
import { getCanvas } from "@/contexts/canvas";
import { config } from "@/definition/config";
import type { IrObject } from "@/objects/object";

const isDrawOptionA = (i: DrawOptions): i is DrawOptionA =>
  (i as DrawOptionA).baseX !== undefined;

const TO_RADIANS = Math.PI / 180;
const RENDER_CANVAS_WIDTH = 1920;
const RENDER_CANVAS_HEIGHT = 1080;
const DEFAULT_CANVAS_WIDTH = 300;
const DEFAULT_CANVAS_HEIGHT = 150;

const hasDefaultIntrinsicSize = (canvas: HTMLCanvasElement) =>
  !canvas.hasAttribute("width") &&
  !canvas.hasAttribute("height") &&
  canvas.width === DEFAULT_CANVAS_WIDTH &&
  canvas.height === DEFAULT_CANVAS_HEIGHT;

const hasRenderAspectRatio = (canvas: HTMLCanvasElement) =>
  canvas.width > 0 &&
  canvas.height > 0 &&
  canvas.width * RENDER_CANVAS_HEIGHT === canvas.height * RENDER_CANVAS_WIDTH;

const initializeTargetCanvasSize = (canvas: HTMLCanvasElement) => {
  if (hasDefaultIntrinsicSize(canvas)) {
    canvas.width = RENDER_CANVAS_WIDTH;
    canvas.height = RENDER_CANVAS_HEIGHT;
    return;
  }

  if (!hasRenderAspectRatio(canvas)) {
    throw new Error(
      `CanvasRender target canvas must use a 16:9 intrinsic size. Received ${canvas.width}x${canvas.height}.`,
    );
  }
};

class CanvasRender implements IRender {
  private readonly targetCanvas: HTMLCanvasElement;
  private readonly targetContext: CanvasRenderingContext2D;
  private readonly renderCanvas: HTMLCanvasElement;
  private readonly renderContext: CanvasRenderingContext2D;
  constructor(targetCanvas: HTMLCanvasElement) {
    this.targetCanvas = targetCanvas;
    initializeTargetCanvasSize(this.targetCanvas);
    this.renderCanvas = document.createElement("canvas");
    this.renderCanvas.width = RENDER_CANVAS_WIDTH;
    this.renderCanvas.height = RENDER_CANVAS_HEIGHT;
    const targetContext = this.targetCanvas.getContext("2d");
    const renderContext = this.renderCanvas.getContext("2d");
    if (!targetContext || !renderContext)
      throw new Error("failed to get context");
    this.targetContext = targetContext;
    this.renderContext = renderContext;
    this.renderContext.scale(
      RENDER_CANVAS_WIDTH / config.canvasWidth,
      RENDER_CANVAS_HEIGHT / config.canvasHeight,
    );
  }

  public drawImage(item: IrObject, options: DrawOptions) {
    const { canvas } = getCanvas(item.__id);
    if (!item.visible) return;
    if (options.rotate !== undefined && options.rotate % 360 !== 0) {
      this.renderContext.save();
      this.renderContext.translate(options.targetX, options.targetY);
      this.renderContext.rotate(options.rotate * TO_RADIANS);
      this._drawImage(canvas, { ...options, targetX: 0, targetY: 0 });
      this.renderContext.restore();
    } else {
      this._drawImage(canvas, options);
    }
  }

  private _drawImage(image: HTMLCanvasElement, options: DrawOptions) {
    if (isDrawOptionA(options)) {
      this.renderContext.drawImage(
        image,
        options.baseX,
        options.baseY,
        options.baseWidth,
        options.baseHeight,
        options.targetX,
        options.targetY,
        options.targetWidth,
        options.targetHeight,
      );
    } else {
      this.renderContext.drawImage(image, options.targetX, options.targetY);
    }
  }

  public apply(clear: boolean) {
    clear &&
      this.targetContext.clearRect(
        0,
        0,
        this.targetCanvas.width,
        this.targetCanvas.height,
      );
    if (!isWide) this.drawLetterBox();
    this.targetContext.drawImage(
      this.renderCanvas,
      0,
      0,
      this.renderCanvas.width,
      this.renderCanvas.height,
      0,
      0,
      this.targetCanvas.width,
      this.targetCanvas.height,
    );
  }

  private drawLetterBox() {
    const letterBoxWidth =
      (config.stageWidth.full - config.stageWidth.default) / 2;
    this.renderContext.clearRect(0, 0, letterBoxWidth, config.stageHeight);
    this.renderContext.clearRect(
      config.canvasWidth - letterBoxWidth,
      0,
      letterBoxWidth,
      config.stageHeight,
    );
  }

  public clear() {
    this.renderContext.clearRect(
      0,
      0,
      this.renderCanvas.width,
      this.renderCanvas.height,
    );
  }
}

export { CanvasRender };
