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
import { getDistance, getSmoothDuration } from "@/utils/object";
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
    for (const _key of Object.keys(options)) {
      const key = _key as keyof IObjectOptions;
      const value = options[key];
      if (value === undefined) {
        delete options[key];
      }
    }
    options.__id ??= uuid();
    this.moverQueue = [];
    this.options = { ...defaultOptions, ...options };
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
      (queue) => queue.vpos === currentTime
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
      this.mover
    );
    this.__updateMoverQueue(lastQueue, currentPos, targetPos);
  }

  get __x() {
    this.__filterMoverQueue();
    const currentQueue = this.moverQueue[0];
    const posX = (() => {
      if (!currentQueue || this.mover === "") return this.options.x;
      if (this.mover === "simple") {
        return (
          currentQueue.current.x +
          (currentQueue.diff.x * (currentTime - currentQueue.vpos)) / 50
        );
      } else if (this.mover === "rolling") {
        //todo: feat rolling
      } else if (this.mover === "smooth") {
        const stepCount = Math.floor((currentTime - currentQueue.vpos) / 5);
        let x = currentQueue.diff.x;
        for (let i = 0; i < stepCount; i++) {
          x -= x / 14 + 1;
        }
        return currentQueue.target.x - x;
      }
      return currentQueue.current.x;
    })();
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
      (queue) => queue.vpos === currentTime
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
      this.mover
    );
    this.__updateMoverQueue(lastQueue, currentPos, targetPos);
  }

  get __y() {
    this.__filterMoverQueue();
    const currentQueue = this.moverQueue[0];
    const posY = (() => {
      if (!currentQueue || this.mover === "") return this.options.y;
      if (this.mover === "simple") {
        return (
          currentQueue.current.y +
          (currentQueue.diff.y * (currentTime - currentQueue.vpos)) / 50
        );
      } else if (this.mover === "rolling") {
        //todo: feat rolling
      } else if (this.mover === "smooth") {
        const stepCount = Math.floor((currentTime - currentQueue.vpos) / 5);
        let y = currentQueue.diff.y;
        for (let i = 0; i < stepCount; i++) {
          y -= y / 14 + 1;
        }
        return currentQueue.target.y - y;
      }
      return currentQueue.current.y;
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
    console.log(`mover: ${val}`);
    this.moverQueue = [];
  }

  protected __updateMoverQueue(
    lastQueue: IrObjectMoverItem | undefined,
    currentPos: IrObjectPos,
    targetPos: IrObjectPos
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
    this.moverQueue = this.moverQueue.filter(
      (item) => item.vpos + item.duration > currentTime
    );
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

  public draw() {
    console.debug("please override this method");
  }
}
export { IrObject };
