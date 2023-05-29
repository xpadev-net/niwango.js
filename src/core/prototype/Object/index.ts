import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processRaw } from "@/core/prototype/Object/raw";

import { processClone } from "./clone";
import { processDef } from "./def";
import { processGetSlot } from "./getSlot";
import { processSetSlot } from "./setSlot";

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
  raw: processRaw,
};

export { prototypeObjectFunctions };
