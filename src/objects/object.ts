import {
  IObjectMover,
  IObjectOptions,
  IrObjectMoverItem,
  IrObjectMoverQueue,
  IrObjectPos,
} from "@/@types/IrObject";
import { currentTime, isWide } from "@/context";
import { register } from "@/contexts/objectManager";
import { config } from "@/definition/config";
import { getDistance, getOptions, getSmoothDuration } from "@/utils/object";
import { uuid } from "@/utils/uuid";

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
  protected options: IObjectOptions;
  protected __width: number;
  protected __height: number;
  protected __modified: boolean;
  protected moverQueue: IrObjectMoverQueue;
  public readonly __id: string;
  public readonly __type: string = "IrObject";
  public readonly __NIWANGO_LITERAL: string = "IrObject";

  protected constructor(options: Partial<IObjectOptions>) {
    options.__id ??= uuid();
    this.moverQueue = [];
    this.options = getOptions(defaultOptions, options);
    this.__id = this.options.__id ?? uuid();
    this.__width = this.__height = 0;
    this.__modified = false;
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
    this.__filterMoverQueue();
    const currentQueue = this.moverQueue[0];
    if (this.mover === "hopping" && currentQueue) {
      return (
        this.options.scale *
        this.calcMover(currentQueue, this.options.x, "scale")
      );
    }
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
    const lastQueue = this.moverQueue.filter(
      (queue) => queue.vpos === currentTime,
    )[0];
    let currentPos, targetPos;
    if (!lastQueue) {
      currentPos = { x: lastVal, y: this.options.y };
      targetPos = { x: input, y: this.options.y };
    } else {
      currentPos = { x: lastVal, y: lastQueue.current.y };
      targetPos = { x: input, y: lastQueue.target.y };
    }
    console.log(
      `mover-x: ${JSON.stringify(currentPos)} to ${JSON.stringify(targetPos)}`,
      this.mover,
    );
    this.__updateMoverQueue(lastQueue, currentPos, targetPos);
  }

  get __x() {
    this.__filterMoverQueue();
    const currentQueue = this.moverQueue[0];
    const posX = this.calcMover(currentQueue, this.options.x, "x");
    const paddingLeft = isWide
      ? 0
      : (config.stageWidth.full - config.stageWidth.default) / 2;
    if (this.options.posX === "migi") {
      return (
        config.stageWidth[isWide ? "full" : "default"] +
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
    const lastQueue = this.moverQueue.filter(
      (queue) => queue.vpos === currentTime,
    )[0];
    let currentPos, targetPos;
    if (!lastQueue) {
      currentPos = { x: this.options.x, y: lastVal };
      targetPos = { x: this.options.x, y: input };
    } else {
      currentPos = { x: lastQueue.current.x, y: lastVal };
      targetPos = { x: lastQueue.target.x, y: input };
    }
    console.log(
      `mover-y: ${JSON.stringify(currentPos)} to ${JSON.stringify(targetPos)}`,
      this.mover,
    );
    this.__updateMoverQueue(lastQueue, currentPos, targetPos);
  }

  get __y() {
    this.__filterMoverQueue();
    const currentQueue = this.moverQueue[0];
    const posY = this.calcMover(currentQueue, this.options.y, "y");
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
    this.__modified = true;
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
    this.__modified = true;
  }

  get mover() {
    return this.options.mover;
  }

  set mover(val: IObjectMover) {
    this.options.mover = val;
    this.moverQueue = [];
  }

  protected __updateMoverQueue(
    lastQueue: IrObjectMoverItem | undefined,
    currentPos: IrObjectPos,
    targetPos: IrObjectPos,
  ) {
    const diff = {
      x: targetPos.x - currentPos.x,
      y: targetPos.y - currentPos.y,
    };
    if (this.mover === "smooth") {
      const distance = getDistance(currentPos, targetPos);
      this.moverQueue = [
        {
          current: currentPos,
          target: targetPos,
          diff: diff,
          vpos: currentTime,
          duration: getSmoothDuration(distance),
        },
      ];
    } else {
      if (lastQueue) {
        lastQueue.current = currentPos;
        lastQueue.target = targetPos;
        lastQueue.diff = diff;
        return;
      }
      this.moverQueue.push({
        current: currentPos,
        target: targetPos,
        diff: diff,
        vpos: currentTime,
        duration: this.mover === "simple" ? 50 : 100,
      });
    }
    this.__filterMoverQueue();
  }

  protected __filterMoverQueue() {
    if (this.mover === "") return;
    const lastLength = this.moverQueue.length;
    this.moverQueue = this.moverQueue.filter(
      (item) => item.vpos + item.duration > currentTime,
    );
    if (lastLength !== this.moverQueue.length) {
      this.__modified = true;
    }
    const currentItem = this.moverQueue[0];
    if (this.mover !== "hopping" && this.moverQueue.length > 4 && currentItem) {
      this.moverQueue = [currentItem, ...this.moverQueue.slice(-3)];
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

  protected get __isModified() {
    return (
      this.__modified ||
      (this.mover === "hopping" && this.moverQueue.length > 0)
    );
  }

  public draw() {
    console.debug("please override this method");
  }

  protected calcMover(
    queue: IrObjectMoverItem | undefined,
    basePos: number,
    axis: "x" | "y" | "scale",
  ) {
    if (axis === "scale") {
      if (queue && this.mover === "hopping") {
        const _steps = 10;
        const _step = Math.floor((currentTime - queue.vpos) / 10);
        return 1 + (_step * _step - (_steps + 1) * _step + _steps) / -50;
      }
      return 1;
    }
    if (!queue || this.mover === "") return basePos;
    if (this.mover === "simple") {
      return (
        queue.current[axis] +
        (queue.diff[axis] * (currentTime - queue.vpos)) / 50
      );
    } else if (this.mover === "hopping") {
      return (
        queue.current[axis] +
        (queue.diff[axis] * (currentTime - queue.vpos)) / 100
      );
    } else if (this.mover === "rolling") {
      const _steps = 20;
      const _step = Math.floor((currentTime - queue.vpos) / 2.5);
      const val1 = ((2 * Math.PI) / _steps) * (_step - 1);
      const val2 = (_step * _step - (_steps + 1) * _step + _steps) / -5;
      const posY =
        queue.current[axis] +
        (queue.diff[axis] * (currentTime - queue.vpos)) / 100;
      return posY + val2 * (axis === "x" ? Math.cos(val1) : Math.sin(val1));
    } else if (this.mover === "smooth") {
      const stepCount = Math.floor((currentTime - queue.vpos) / 5);
      let pos = queue.diff[axis];
      for (let i = 0; i < stepCount; i++) {
        pos -= pos / 14 + 1;
      }
      return queue.target[axis] - pos;
    }
    return queue.target[axis];
  }
}

export { IrObject };
