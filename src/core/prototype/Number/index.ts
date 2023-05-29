import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";

import { processAbs } from "./abs";
import { processCos } from "./cos";
import { processFloor } from "./floor";
import { processPow } from "./pow";
import { processSin } from "./sin";

export type PrototypeNumberFunction = PrototypeFunction<number>;

const prototypeNumberFunctions: PrototypeFunctions<number> = {
  floor: processFloor,
  sin: processSin,
  cos: processCos,
  pow: processPow,
  abs: processAbs,
};

export { prototypeNumberFunctions };
