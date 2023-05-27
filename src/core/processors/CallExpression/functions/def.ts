import { A_CallExpression, T_scope } from "@/@types/ast";
import typeGuard from "@/typeGuard";
import { getName } from "@/context";
import { InvalidTypeError } from "@/errors/InvalidTypeError";
import { definedFunction } from "@/@types/function";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processDef = (
  script: A_CallExpression,
  scopes: T_scope[],
  object: { [key: string]: unknown }
) => {
  const func = (() => {
    if (typeGuard.Identifier(script.arguments[0])) {
      return {
        type: "CallExpression",
        callee: script.arguments[0],
        arguments: [],
      } as A_CallExpression;
    }
    if (typeGuard.CallExpression(script.arguments[0])) {
      return script.arguments[0];
    }
    return undefined;
  })();
  if (!func) {
    return;
  }
  const functionName = getName(func.callee, scopes);
  if (typeof functionName !== "string") {
    throw new InvalidTypeError(
      "function name must be string",
      "CallExpression",
      script,
      scopes
    );
  }
  object[functionName] = {
    type: "definedFunction",
    isKari: false,
    script,
  } as definedFunction;
};

export { processDef };
