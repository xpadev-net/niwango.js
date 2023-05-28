import { PrototypeFunction, PrototypeFunctions } from "@/@types/core/prototype";
import { processToASNumber } from "@/core/prototype/Bool/toASNumber";
import { processToASString } from "@/core/prototype/Bool/toASString";
import { processRaw } from "@/core/prototype/Bool/raw";

export type PrototypeBoolFunction = PrototypeFunction<boolean>;

const prototypeBoolFunctions: PrototypeFunctions<boolean> = {
  toASNumber: processToASNumber,
  toASString: processToASString,
  toASBoolean: processRaw,
  raw: processRaw,
};

export { prototypeBoolFunctions };
