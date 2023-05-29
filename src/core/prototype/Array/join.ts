import { execute } from "@/core/coreContext";
import { PrototypeArrayFunction } from "@/core/prototype/Array/index";

const processJoin: PrototypeArrayFunction = (script, scopes, object) => {
  const separator = execute(script.arguments[0], scopes);
  if (typeof separator !== "undefined") {
    return object.join(`${separator}`);
  }
  return object.join();
};

export { processJoin };
