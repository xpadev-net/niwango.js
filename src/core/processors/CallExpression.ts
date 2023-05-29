import { A_CallExpression, A_MemberExpression, T_scope } from "@/@types/ast";
import { definedFunction } from "@/@types/function";
import { argumentParser, getName } from "@/context";
import { execute } from "@/core/coreContext";
import { resolvePrototype } from "@/core/coreContext";
import { functions } from "@/core/functions";
import { getType } from "@/core/prototype/getType";
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
  const prototype = resolvePrototype(getType(object), callee);
  if (prototype) {
    return prototype(script, scopes, object);
  }
  const processor = functions[callee];
  if (typeof processor === "object" && processor.condition(object, script)) {
    return processor.func(script, scopes, object);
  } else if (typeof processor === "function") {
    return processor(script, scopes, object);
  }
  if (
    object?.[callee] &&
    (object?.[callee] as definedFunction)?.type === "definedFunction"
  ) {
    const func = object[callee] as definedFunction;
    if (func.isKari) {
      const args: { [key: string]: unknown } = {};
      let count = 1;
      script.arguments.forEach((val) => {
        if (val?.NIWANGO_Identifier) {
          args[getName(val.NIWANGO_Identifier, scopes) as string] = execute(
            val,
            scopes
          );
        } else {
          args[`$${count++}`] = execute(val, scopes);
        }
      });
      return execute(func.script.arguments[1], [args, ...scopes]);
    } else {
      const argNames = func.script.arguments[0].arguments.map(
        (arg) => getName(arg, scopes) as string
      );
      const args = argumentParser(script.arguments, scopes, argNames);
      return execute(func.script.arguments[1], [
        { ...args, self: object },
        object,
        ...scopes,
      ]);
    }
  }
  const self = execute({ type: "Identifier", name: "self" }, scopes) as {
    [key: string]: unknown;
  };
  if (
    self?.[callee] &&
    (self?.[callee] as definedFunction)?.type === "definedFunction"
  ) {
    const func = self[callee] as definedFunction;
    if (func.isKari) {
      const args: { [key: string]: unknown } = {};
      let count = 1;
      script.arguments.forEach((val) => {
        if (val?.NIWANGO_Identifier) {
          args[getName(val.NIWANGO_Identifier, scopes) as string] = execute(
            val,
            scopes
          );
        } else {
          args[`$${count++}`] = execute(val, scopes);
        }
      });
      return execute(func.script.arguments[1], [args, ...scopes]);
    } else {
      const argNames = func.script.arguments[0].arguments.map(
        (arg) => getName(arg, scopes) as string
      );
      const args = argumentParser(script.arguments, scopes, argNames);
      return execute(func.script.arguments[1], [{ ...args }, ...scopes]);
    }
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
