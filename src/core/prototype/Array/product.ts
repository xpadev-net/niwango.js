import { PrototypeArrayFunction } from "@/core/prototype/Array/index";

const processProduct: PrototypeArrayFunction = (_script, _scopes, object) => {
  return object.reduce<number>((pv, val) => pv * Number(val), 1);
};

export { processProduct };
