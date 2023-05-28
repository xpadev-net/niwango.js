import { Execute } from "@/@types/execute";

let execute: Execute;

const setExecute = (val: Execute) => {
  execute = val;
};

const prototypeScope = {
  Array: {},
  String: {},
  Object: {},
  Number: {},
};

export { execute, setExecute, prototypeScope };
