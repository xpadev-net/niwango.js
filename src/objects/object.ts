import { IrObjectMoverQueue } from "@/@types/IrObject";
import { IObjectMover, IObjectOptions } from "@/@types/types";
import { currentTime, isWide } from "@/context";
import { config } from "@/definition/config";
import { register } from "@/utils/objectManager";

const defaultOptions: IObjectOptions = {
  x: 0,
  y: 0,
  z: 0,
  pos: "naka",
  posX: "naka",
  posY: "naka",
  color: 0,
  visible: true,
  alpha: 0,
  scale: 1,
  mover: "",
};

/**
 * 描画オブジェクトの基底クラス
 */
abstract class IrObject {
  protected readonly targetContext: CanvasRenderingContext2D;
  protected readonly __canvas: HTMLCanvasElement;
  protected readonly __context: CanvasRenderingContext2D;
  protected options: IObjectOptions;
  protected __width: number;
  protected __height: number;
  protected moverQueue: IrObjectMoverQueue;

  protected constructor(
    context: CanvasRenderingContext2D,
    options: Partial<IObjectOptions>
  ) {
    this.targetContext = context;
    this.moverQueue = {
      x: [],
      y: [],
    };
    this.options = Object.assign(defaultOptions, options);
    const canvas = document.createElement("canvas");
    canvas.width = config.canvasWidth;
    canvas.height = config.canvasHeight;
    const __context = canvas.getContext("2d");
    if (!__context) {
      throw new Error("Fail to get CanvasRenderingContext2D");
    }
    this.__canvas = canvas;
    this.__context = __context;
    this.__context.textAlign = "start";
    this.__context.textBaseline = "alphabetic";
    this.__context.lineWidth = 4;
    this.__width = this.__height = 0;
    this.__updateColor();
    this.__parsePos();
    register(this);
  }

  get width() {
    return this.__width;
  }
  set width(val: number) {
    this.__width = val;
  }
  get height() {
    return this.__height;
  }
  set height(val: number) {
    this.__height = val;
  }
  get scale() {
    return this.options.scale;
  }
  set scale(val: number) {
    this.options.scale = val;
  }

  get x() {
    return this.options.x;
  }

  set x(val: number) {
    const input = Number(val) || 0;
    const lastVal = this.options.x;
    this.options.x = input;
    if (this.mover === "") return;
    if (this.mover === "smooth") {
      this.moverQueue.x = [
        {
          current: lastVal,
          target: input,
          diff: input - lastVal,
          vpos: currentTime,
        },
      ];
      return;
    } else {
      this.moverQueue.x.push({
        current: lastVal,
        target: input,
        diff: input - lastVal,
        vpos: currentTime,
      });
    }
    this.__updateMoverQueue("x");
  }

  get __x() {
    this.__updateMoverQueue("x");
    const currentQueue = this.moverQueue.x[0];
    const posX = (() => {
      if (!currentQueue || this.mover === "") return this.options.x;
      if (this.mover === "simple") {
        return (
          currentQueue.current +
          (currentQueue.diff * (currentTime - currentQueue.vpos)) / 50
        );
      } else if (this.mover === "rolling") {
        //todo: feat rolling
      }
      return currentQueue.current;
    })();
    const paddingLeft = isWide
      ? 0
      : (config.stageWidth.full - config.stageWidth.default) / 2;
    if (this.options.posX === "migi") {
      return (
        config.stageWidth[isWide ? "full" : "default"] -
        posX -
        this.width +
        paddingLeft
      );
    } else if (this.options.posX === "hidari") {
      return posX + paddingLeft;
    }
    return (
      config.stageWidth[isWide ? "full" : "default"] / 2 +
      posX -
      this.width / 2 +
      paddingLeft
    );
  }

  get y() {
    return this.options.y;
  }

  set y(val: number) {
    const input = Number(val) || 0;
    const lastVal = this.options.y;
    this.options.y = input;
    if (this.mover === "") return;
    if (this.mover === "smooth") {
      this.moverQueue.y = [
        {
          current: lastVal,
          target: input,
          diff: input - lastVal,
          vpos: currentTime,
        },
      ];
      return;
    } else {
      this.moverQueue.y.push({
        current: lastVal,
        target: input,
        diff: input - lastVal,
        vpos: currentTime,
      });
    }
    this.__updateMoverQueue("y");
  }

  get __y() {
    this.__updateMoverQueue("y");
    const currentQueue = this.moverQueue.y[0];
    const posY = (() => {
      if (!currentQueue || this.mover === "") return this.options.y;
      if (this.mover === "simple") {
        return (
          currentQueue.current +
          (currentQueue.diff * (currentTime - currentQueue.vpos)) / 50
        );
      } else if (this.mover === "rolling") {
        //todo: feat rolling
      }
      return currentQueue.current;
    })();
    if (this.options.posY === "ue") {
      return posY;
    } else if (this.options.posY === "shita") {
      return config.canvasHeight + posY - this.height;
    }
    return config.canvasHeight / 2 + posY - this.height / 2;
  }

  get z() {
    return this.options.z;
  }

  set z(val: number) {
    this.options.z = val;
  }

  get pos() {
    return this.options.pos;
  }

  set pos(val: string) {
    this.options.pos = val;
    this.__parsePos();
  }

  get color() {
    return this.options.color;
  }

  set color(val: number) {
    this.options.color = val;
    this.__updateColor();
    this.__draw();
  }

  get visible() {
    return this.options.visible;
  }

  set visible(val: boolean) {
    this.options.visible = val;
  }

  get alpha() {
    return this.options.alpha;
  }

  set alpha(val: unknown) {
    let value: number;
    if (typeof val !== "number") {
      value = Number(val) || 0;
    } else if (val > 100) {
      value = 100;
    } else if (val < 0) {
      value = 0;
    } else {
      value = val;
    }
    this.options.alpha = value;
    this.__draw();
  }

  get mover() {
    return this.options.mover;
  }

  set mover(val: IObjectMover) {
    this.options.mover = val;
    this.moverQueue = {
      x: [],
      y: [],
    };
  }

  protected __updateMoverQueue(key: "x" | "y") {
    if (this.mover === "" || this.mover === "smooth") return;
    const duration = this.mover === "simple" ? 50 : 100;
    this.moverQueue[key] = this.moverQueue[key].filter(
      (item) => item.vpos > currentTime - duration
    );
    const currentItem = this.moverQueue[key][0];
    if (
      this.mover !== "hopping" &&
      this.moverQueue[key].length > 4 &&
      currentItem
    ) {
      this.moverQueue[key] = [currentItem, ...this.moverQueue[key].slice(-3)];
    }
  }

  protected __parsePos() {
    const pos = this.options.pos;
    if (pos.includes("hidari")) {
      this.options.posX = "hidari";
    } else if (pos.includes("migi")) {
      this.options.posX = "migi";
    } else {
      this.options.posX = "naka";
    }
    if (pos.includes("ue")) {
      this.options.posY = "ue";
    } else if (pos.includes("shita")) {
      this.options.posY = "shita";
    } else {
      this.options.posY = "naka";
    }
  }
  protected __updateColor() {
    console.debug("please override this method");
  }
  protected __draw() {
    console.debug("please override this method");
  }

  public draw() {
    console.debug("please override this method");
  }
}
export { IrObject };
