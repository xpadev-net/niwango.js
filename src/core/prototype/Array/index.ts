import { processIndex } from "./_index";
import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processSize } from "./size";
import { processUnshift } from "./unshift";
import { processPush } from "@/core/prototype/Array/push";
import { processShift } from "@/core/prototype/Array/shift";
import { processPop } from "@/core/prototype/Array/pop";
import { processSort } from "@/core/prototype/Array/sort";
import { processSum } from "@/core/prototype/Array/sum";
import { processProduct } from "@/core/prototype/Array/product";

export type PrototypeArrayFunction = PrototypeFunction<Array<unknown>>;

const prototypeArrayFunctions: PrototypeFunctions<Array<unknown>> = {
  index: processIndex,
  size: processSize,
  unshift: processUnshift,
  push: processPush,
  shift: processShift,
  pop: processPop,
  sort: processSort,
  sum: processSum,
  product: processProduct,
};

export { prototypeArrayFunctions };
