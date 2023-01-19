import { IrObject } from "@/objects/object";

const drawObjects: IrObject[] = [];
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
export { draw, register };
