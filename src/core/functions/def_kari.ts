import { A_CallExpression, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";
import { definedFunction } from "@/@types/function";

/**
 * @関数
 * 関数定義用関数
 * @param script
 * @param scopes
 * @param object
 */
const processDefKari = (
  script: A_CallExpression,
  scopes: T_scope[],
  object: { [key: string]: unknown }
) => {
  if (!script.arguments[0]) {
    return;
  }
  const functionName = execute(script.arguments[0], scopes);
  if (typeof functionName !== "string") {
    return;
  }
  object[functionName] = {
    type: "definedFunction",
    isKari: true,
    script,
  } as definedFunction;
};

export { processDefKari };
