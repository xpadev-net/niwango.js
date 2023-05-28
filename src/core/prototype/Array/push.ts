import { PrototypeArrayFunction } from "@/core/prototype/Array/index";
import { execute } from "@/core/coreContext";

const processPush: PrototypeArrayFunction = (script, scopes, object) => {
  const value = execute(script.arguments[0], scopes);
  return object.push(value);
};

export { processPush };
