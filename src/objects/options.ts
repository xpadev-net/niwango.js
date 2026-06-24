import type { IObjectMover } from "@/@types/IrObject";

const objectMoverOptionMap = {
  "": true,
  hopping: true,
  rolling: true,
  simple: true,
  smooth: true,
} as const satisfies Record<IObjectMover, true>;

const objectMoverOptions = Object.keys(objectMoverOptionMap) as IObjectMover[];

export { objectMoverOptions };
