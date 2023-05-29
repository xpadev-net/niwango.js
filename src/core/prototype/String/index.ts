import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processIndex } from "@/core/prototype/String/_index";
import { processEval } from "@/core/prototype/String/eval";
import { processHashCode } from "@/core/prototype/String/hashCode";
import { processIndexOf } from "@/core/prototype/String/indexOf";
import { processMultiply } from "@/core/prototype/String/multiply";
import { processSize } from "@/core/prototype/String/size";
import { processSlice } from "@/core/prototype/String/slice";
import { processToASNumber } from "@/core/prototype/String/toASNumber";
import { processToASString } from "@/core/prototype/String/toASString";
import { processToFloat } from "@/core/prototype/String/toFloat";
import { processToInteger } from "@/core/prototype/String/toInteger";

export type PrototypeStringFunction = PrototypeFunction<string>;

const prototypeStringFunctions: PrototypeFunctions<string> = {
  index: processIndex,
  size: processSize,
  indexOf: processIndexOf,
  slice: processSlice,
  toInteger: processToInteger,
  toFloat: processToFloat,
  eval: processEval,
  toASNumber: processToASNumber,
  toASString: processToASString,
  raw: processToASString,
  multiply: processMultiply,
  hashCode: processHashCode,
};

export { prototypeStringFunctions };
