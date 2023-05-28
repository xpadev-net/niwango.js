import { PrototypeValueFunction } from "@/core/prototype/Value/index";
import { resolvePrototype } from "@/core/prototype/resolve";
import { UnaryPlus } from "@/core/operators";

const processPlus: PrototypeValueFunction = (script, scopes, object) => {
  const toASNumber = resolvePrototype(typeof object, "toASNumber");
  if (!toASNumber) throw new Error();
  return UnaryPlus(toASNumber(script, scopes, object));
};

export { processPlus };
