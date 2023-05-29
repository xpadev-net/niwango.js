import { UnaryPlus } from "@/core/operators";
import { resolvePrototype } from "@/core/coreContext";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";
import {getType} from "@/core/prototype/getType";

const processPlus: PrototypeValueFunction = (script, scopes, object) => {
  const toASNumber = resolvePrototype(getType(object), "toASNumber");
  if (!toASNumber) throw new Error();
  return UnaryPlus(toASNumber(script, scopes, object));
};

export { processPlus };
