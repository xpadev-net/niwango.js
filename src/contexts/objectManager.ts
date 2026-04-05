import type { IrObject } from "@/objects/object";

let drawObjects: IrObject[] = [];

/**
 * 描画オブジェクトを描画する
 */
const draw = () => {
  drawObjects.sort((a, b) => {
    if (a.z < b.z) {
      return -1;
    } else if (a.z > b.z) {
      return 1;
    }
    return a.__creationVpos - b.__creationVpos;
  });
  for (const object of drawObjects) {
    if (object.visible) {
      object.draw();
    }
  }
};

/**
 * 描画オブジェクトを追加する
 * @param item
 */
const register = (item: IrObject) => {
  drawObjects.push(item);
};

/**
 * 描画オブジェクトをリセットする
 */
const resetObjects = () => {
  drawObjects = [];
};

export { draw, drawObjects, register, resetObjects };
