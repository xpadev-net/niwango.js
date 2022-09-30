import { IrObject } from "@/objects/object";

const drawObjects: IrObject[] = [];
const draw = () => {
  for (const i in drawObjects) {
    drawObjects[i]?.__draw();
  }
};
const register = (item: IrObject) => {
  drawObjects.push(item);
};
export { draw, register };
