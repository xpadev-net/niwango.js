import { UnaryNegation } from "@/core/operators";
import { resolvePrototype } from "@/core/coreContext";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";
import {getType} from "@/core/prototype/getType";

const processMinus: PrototypeValueFunction = (script, scopes, object) => {
  const toASNumber = resolvePrototype(getType(object), "toASNumber");
  if (!toASNumber) throw new Error();
  return UnaryNegation(toASNumber(script, scopes, object));
};

export { processMinus };
