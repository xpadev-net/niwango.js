import { ResolvePrototype, ResolveResult } from "@/@types/core/prototype";
import { prototypeScope, setResolvePrototype } from "@/core/coreContext";
import { prototypeArrayFunctions } from "@/core/prototype/Array";
import { prototypeBoolFunctions } from "@/core/prototype/Bool";
import { prototypeNumberFunctions } from "@/core/prototype/Number";
import { prototypeObjectFunctions } from "@/core/prototype/Object";
import { prototypeStringFunctions } from "@/core/prototype/String";
import { prototypeValueFunctions } from "@/core/prototype/Value";

const resolvePrototype: ResolvePrototype = (type, name) => {
  if (
    (type === "object" || type === "array") &&
    prototypeObjectFunctions[name]
  ) {
    return prototypeObjectFunctions[name] as ResolveResult;
  } else if (type === "array" && prototypeArrayFunctions[name]) {
    return prototypeArrayFunctions[name] as ResolveResult;
  } else if (type === "string" && prototypeStringFunctions[name]) {
    return prototypeStringFunctions[name] as ResolveResult;
  } else if (type === "boolean" && prototypeBoolFunctions[name]) {
    return prototypeBoolFunctions[name] as ResolveResult;
  } else if (type === "number" && prototypeNumberFunctions[name]) {
    return prototypeNumberFunctions[name] as ResolveResult;
  } else if (prototypeValueFunctions[name]) {
    return prototypeValueFunctions[name] as ResolveResult;
  }

  if (type === "array" && prototypeScope.Array[name]) {
    return prototypeScope.Array[name] as ResolveResult;
  } else if (type === "string" && prototypeScope.String[name]) {
    return prototypeScope.String[name] as ResolveResult;
  } else if (type === "boolean" && prototypeScope.Bool[name]) {
    return prototypeScope.Bool[name] as ResolveResult;
  } else if (type === "number" && prototypeScope.Number[name]) {
    return prototypeScope.Number[name] as ResolveResult;
  } else if (type === "object" && prototypeScope.Object[name]) {
    return prototypeScope.Object[name] as ResolveResult;
  }
  return undefined;
};

const initResolvePrototype = () => {
  setResolvePrototype(resolvePrototype);
};

export { initResolvePrototype };
