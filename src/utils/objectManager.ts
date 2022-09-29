import { IrText } from "@/objects/text";

const drawObjects: IrText[] = [];
const draw = () => {
  for (const i in drawObjects) {
    drawObjects[i]?.__draw();
  }
};
export { draw };
