import { ResolvePrototype } from "@/@types/core/prototype";
import { Execute } from "@/@types/execute";

let execute: Execute;
let resolvePrototype: ResolvePrototype;

const setExecute = (val: Execute) => {
  execute = val;
};
const setResolvePrototype = (val: ResolvePrototype) => {
  resolvePrototype = val;
};

let prototypeScope: {
  [key in "Array" | "Bool" | "Number" | "Object" | "String" | "Value"]: {
    [key: string]: unknown;
  };
} = {
  Array: {},
  Bool: {},
  Number: {},
  Object: {},
  String: {},
  Value: {},
};

const initPrototypeScope = () => {
  prototypeScope = {
    Array: {},
    Bool: {},
    Number: {},
    Object: {},
    String: {},
    Value: {},
  };
};

export {
  execute,
  initPrototypeScope,
  prototypeScope,
  resolvePrototype,
  setExecute,
  setResolvePrototype,
};
