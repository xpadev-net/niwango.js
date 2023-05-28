import { PrototypeStringFunction } from "@/core/prototype/String/index";

const processSize: PrototypeStringFunction = (_script, _scopes, object) => {
  return object.length;
};

export { processSize };
