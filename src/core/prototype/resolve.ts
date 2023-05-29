import { PrototypeFunction } from "@/@types/core/prototype";
import { prototypeArrayFunctions } from "@/core/prototype/Array";
import { prototypeBoolFunctions } from "@/core/prototype/Bool";
import { prototypeObjectFunctions } from "@/core/prototype/Object";
import { prototypeStringFunctions } from "@/core/prototype/String";
import { prototypeValueFunctions } from "@/core/prototype/Value";

type prototypeType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "undefined"
  | "object"
  | "array"
  | "function"
  | "bigint"
  | "symbol";

type ResolveResult = PrototypeFunction<unknown> | undefined;

const resolvePrototype = (type: prototypeType, name: string): ResolveResult => {
  if (type === "array" && prototypeArrayFunctions[name]) {
    return prototypeArrayFunctions[name] as ResolveResult;
  } else if (type === "string" && prototypeStringFunctions[name]) {
    return prototypeStringFunctions[name] as ResolveResult;
  } else if (type === "boolean" && prototypeBoolFunctions[name]) {
    return prototypeBoolFunctions[name] as ResolveResult;
  } else if (type === "object" && prototypeObjectFunctions[name]) {
    return prototypeObjectFunctions[name] as ResolveResult;
  }
  return prototypeValueFunctions[name] as ResolveResult;
};

export { resolvePrototype };
