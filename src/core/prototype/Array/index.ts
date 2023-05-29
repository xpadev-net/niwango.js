import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processJoin } from "@/core/prototype/Array/join";
import { processPop } from "@/core/prototype/Array/pop";
import { processProduct } from "@/core/prototype/Array/product";
import { processPush } from "@/core/prototype/Array/push";
import { processShift } from "@/core/prototype/Array/shift";
import { processSort } from "@/core/prototype/Array/sort";
import { processSum } from "@/core/prototype/Array/sum";

import { processIndex } from "./_index";
import { processSize } from "./size";
import { processUnshift } from "./unshift";

export type PrototypeArrayFunction = PrototypeFunction<Array<unknown>>;

const prototypeArrayFunctions: PrototypeFunctions<Array<unknown>> = {
  index: processIndex,
  size: processSize,
  unshift: processUnshift,
  join: processJoin,
  push: processPush,
  shift: processShift,
  pop: processPop,
  sort: processSort,
  sum: processSum,
  product: processProduct,
};

export { prototypeArrayFunctions };
