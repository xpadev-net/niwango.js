import { PrototypeStringFunction } from "@/core/prototype/String/index";
import { execute } from "@/core/coreContext";

const processIndex: PrototypeStringFunction = (script, scopes, object) => {
  const index = execute(script.arguments[0], scopes);
  return object[Number(index)];
};

export { processIndex };
