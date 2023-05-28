import { PrototypeArrayFunction } from "@/core/prototype/Array/index";

const processSum: PrototypeArrayFunction = (_script, _scopes, object) => {
  return object.reduce<number>((pv, val) => pv + Number(val), 0);
};

export { processSum };
