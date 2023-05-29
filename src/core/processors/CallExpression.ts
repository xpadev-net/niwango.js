import { A_CallExpression, A_MemberExpression, T_scope } from "@/@types/ast";
import { getName } from "@/context";
import { execute } from "@/core/coreContext";
import { functions } from "@/core/functions";
import { resolvePrototype } from "@/core/prototype/resolve";
import { NotImplementedError } from "@/errors/NotImplementedError";
import typeGuard from "@/typeGuard";
import { getGlobalScope } from "@/utils/utils";

const processCallExpression = (script: A_CallExpression, scopes: T_scope[]) => {
  const isMemberExpression = typeGuard.MemberExpression(script.callee);
  const callee = getName(
    isMemberExpression
      ? (script.callee as A_MemberExpression).property
      : script.callee,
    scopes
  ) as string;
  const object = getThis(script, scopes);
  const prototype = resolvePrototype(typeof object, callee);
  if (prototype) {
    return prototype(script, scopes, object);
  }
  const processor = functions[callee];
  if (typeof processor === "object" && processor.condition(object, script)) {
    return processor.func(script, scopes, object);
  } else if (typeof processor === "function") {
    return processor(script, scopes, object);
  }
  throw new NotImplementedError(script, scopes);
};

/**
 * 参照を取るための関数
 * @param script
 * @param scopes
 */
const getThis = (
  script: A_CallExpression,
  scopes: T_scope[]
): { [key: string]: unknown } => {
  if (typeGuard.MemberExpression(script.callee))
    return execute(script.callee.object, scopes) as { [key: string]: unknown };
  return getGlobalScope(scopes) as { [key: string]: unknown };
};

export { processCallExpression };
