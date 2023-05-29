import { resolvePrototype } from "@/core/coreContext";
import { UnaryPlus } from "@/core/operators";
import { getType } from "@/core/prototype/getType";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";

const processPlus: PrototypeValueFunction = (script, scopes, object) => {
  const toASNumber = resolvePrototype(getType(object), "toASNumber");
  if (!toASNumber) throw new Error();
  return UnaryPlus(toASNumber(script, scopes, object));
};

export { processPlus };
