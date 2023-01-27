import { IrObject } from "@/objects/object";

let drawObjects: IrObject[] = [];
const draw = () => {
  drawObjects.sort((a, b) => {
    if (a.z < b.z) {
      return -1;
    } else if (a.z > b.z) {
      return 1;
    }
    return 0;
  });
  for (const object of drawObjects) {
    if (object.visible) object.draw();
  }
};
const register = (item: IrObject) => {
  drawObjects.push(item);
};
const resetObjects = () => {
  drawObjects = [];
};
export { draw, register, resetObjects };
