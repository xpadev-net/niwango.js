import { processDef } from "@/core/prototype/Object/def";
import { processGetSlot } from "@/core/prototype/Object/getSlot";
import { processSetSlot } from "@/core/prototype/Object/setSlot";
import { processClone } from "@/core/prototype/Object/clone";
import { PrototypeFunctions } from "@/@types/core/prototype";

const prototypeFunctions: PrototypeFunctions = {
  def: processDef,
  getSlot: processGetSlot,
  setSlot: processSetSlot,
  clone: processClone,
};

export { prototypeFunctions };
