import { PrototypeStringFunction } from "@/core/prototype/String/index";

const processToFloat: PrototypeStringFunction = (_script, _scopes, object) => {
  return parseFloat(object);
};

export { processToFloat };
