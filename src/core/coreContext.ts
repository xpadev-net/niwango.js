import { Execute } from "@/@types/execute";
import {ResolvePrototype} from "@/@types/core/prototype";

let execute: Execute;
let resolvePrototype: ResolvePrototype;

const setExecute = (val: Execute) => {
  execute = val;
};
const setResolvePrototype = (val: ResolvePrototype) => {
  resolvePrototype = val;
}

const prototypeScope:{[key in "Array"|"Bool"|"Number"|"Object"|"String"|"Value"]:{
  [key:string]:unknown
}} = {
  Array: {},
  Bool: {},
  Number: {},
  Object: {},
  String: {},
  Value: {},
};

export { execute, prototypeScope, setExecute,resolvePrototype, setResolvePrototype };
