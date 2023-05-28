import { PrototypeArrayFunction } from "@/core/prototype/Array/index";

const processPop: PrototypeArrayFunction = (_script, _scopes, object) => {
  return object.pop();
};

export { processPop };
