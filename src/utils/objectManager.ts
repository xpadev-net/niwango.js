import { IrObject } from "@/objects/object";

const drawObjects: IrObject[] = [];
const draw = () => {
  for (const object of drawObjects) {
    object.draw();
  }
};
const register = (item: IrObject) => {
  console.log([...drawObjects]);
  drawObjects.push(item);
};
export { draw, register };
