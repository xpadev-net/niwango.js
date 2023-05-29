import { execute } from "@/core/coreContext";
import { LessThan } from "@/core/operators";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";

const processCompare: PrototypeValueFunction = (script, scopes, object) => {
  const value = execute(script.arguments[0], scopes);
  if (object === value) return 0;
  if (LessThan(object, value)) return -1;
  return 1;
};

export { processCompare };
