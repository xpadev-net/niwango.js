import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processFloor } from "./floor";
import { processSin } from "./sin";
import { processCos } from "./cos";
import { processPow } from "./pow";
import { processAbs } from "./abs";

export type PrototypeNumberFunction = PrototypeFunction<number>;

const prototypeNumberFunctions: PrototypeFunctions<number> = {
  floor: processFloor,
  sin: processSin,
  cos: processCos,
  pow: processPow,
  abs: processAbs,
};

export { prototypeNumberFunctions };
