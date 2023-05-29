import { execute } from "@/core/coreContext";
import { PrototypeArrayFunction } from "@/core/prototype/Array/index";

const processIndex: PrototypeArrayFunction = (script, scopes, object) => {
  const index = execute(script.arguments[0], scopes);
  if (typeof index === "number") {
    return object[index];
  }
  return object[Number(index)];
};

export { processIndex };
