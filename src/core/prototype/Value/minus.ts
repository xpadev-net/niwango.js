import { resolvePrototype } from "@/core/coreContext";
import { UnaryNegation } from "@/core/operators";
import { getType } from "@/core/prototype/getType";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";

const processMinus: PrototypeValueFunction = (script, scopes, object) => {
  const toASNumber = resolvePrototype(getType(object), "toASNumber");
  if (!toASNumber) throw new Error();
  return UnaryNegation(toASNumber(script, scopes, object));
};

export { processMinus };
