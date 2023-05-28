import { PrototypeNumberFunction } from "@/core/prototype/Number/index";
import { execute } from "@/core/coreContext";

const processPow: PrototypeNumberFunction = (script, scopes, object) => {
  const exponent = execute(script.arguments[0], scopes);
  return Math.pow(object, Number(exponent));
};

export { processPow };
