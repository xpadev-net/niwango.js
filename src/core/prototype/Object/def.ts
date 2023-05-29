import { definedFunction } from "@/@types/function";
import { getName } from "@/context";
import { InvalidTypeError } from "@/errors/InvalidTypeError";
import typeGuard from "@/typeGuard";

import { PrototypeObjectFunction } from "./index";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processDef: PrototypeObjectFunction = (script, scopes, object) => {
  const functionName = (() => {
    if (typeGuard.Identifier(script.arguments[0])) {
      return getName(script.arguments[0], scopes);
    }
    if (typeGuard.CallExpression(script.arguments[0])) {
      return getName(script.arguments[0].callee, scopes);
    }
    throw new InvalidTypeError(
      "function name must be CallExpression or Identifier",
      script,
      scopes
    );
  })();
  if (typeof functionName !== "string") {
    throw new InvalidTypeError("function name must be string", script, scopes);
  }
  object[functionName] = {
    type: "definedFunction",
    isKari: false,
    script,
  } as definedFunction;
};

export { processDef };
