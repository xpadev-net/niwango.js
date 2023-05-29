import { execute } from "@/core/coreContext";
import { PrototypeArrayFunction } from "@/core/prototype/Array/index";

const processUnshift: PrototypeArrayFunction = (script, scopes, object) => {
  const value = execute(script.arguments[0], scopes);
  return object.unshift(value);
};

export { processUnshift };
