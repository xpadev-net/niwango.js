import { PrototypeNumberFunction } from "@/core/prototype/Number/index";

const processFloor: PrototypeNumberFunction = (_script, _scopes, object) => {
  return Math.floor(object);
};

export { processFloor };
