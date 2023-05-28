import { processDef } from "./def";
import { processGetSlot } from "./getSlot";
import { processSetSlot } from "./setSlot";
import { processClone } from "./clone";
import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";

export type PrototypeObjectFunction = PrototypeFunction<{
  [key: string | number]: unknown;
}>;

const prototypeObjectFunctions: PrototypeFunctions<{
  [key: string | number]: unknown;
}> = {
  def: processDef,
  getSlot: processGetSlot,
  setSlot: processSetSlot,
  clone: processClone,
};

export { prototypeObjectFunctions };
