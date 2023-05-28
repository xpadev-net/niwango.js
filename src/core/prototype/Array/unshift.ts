import { PrototypeArrayFunction } from "@/core/prototype/Array/index";
import { execute } from "@/core/coreContext";

const processUnshift: PrototypeArrayFunction = (script, scopes, object) => {
  const value = execute(script.arguments[0], scopes);
  return object.unshift(value);
};

export { processUnshift };
