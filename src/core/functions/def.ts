import { A_CallExpression } from "@/@types/ast";
import typeGuard from "@/typeGuard";
import { getName } from "@/context";
import { InvalidTypeError } from "@/errors/InvalidTypeError";
import { definedFunction } from "@/@types/function";
import { IrFunction } from "@/core/functions/index";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processDef: IrFunction = (script, scopes, object) => {
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
    throw new InvalidTypeError(
      "function name must be CallExpression or Identifier",
      script,
      scopes
    );
  })();
  const functionName = getName(func.callee, scopes);
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
