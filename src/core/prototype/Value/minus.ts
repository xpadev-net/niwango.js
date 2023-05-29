import { UnaryNegation } from "@/core/operators";
import { resolvePrototype } from "@/core/prototype/resolve";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";

const processMinus: PrototypeValueFunction = (script, scopes, object) => {
  const toASNumber = resolvePrototype(typeof object, "toASNumber");
  if (!toASNumber) throw new Error();
  return UnaryNegation(toASNumber(script, scopes, object));
};

export { processMinus };
