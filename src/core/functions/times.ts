import { A_ANY, A_CallExpression, Argument, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";

/**
 * @関数
 * forループ用関数
 * @param body
 * @param scopes
 * @param object
 */
const processTimes = (
  script: A_CallExpression,
  scopes: T_scope[],
  object: { [key: string]: unknown }
) => {
  const body = script.arguments[0] as Argument<A_ANY>;
  let lastResult;
  for (let i = 0; i < Number(object); i++) {
    if (body.type === "LambdaExpression") {
      lastResult = execute(body.body, [{ "@0": i }, ...scopes]);
      continue;
    }
    lastResult = execute(body, [{ "@0": i }, ...scopes]);
  }
  return lastResult;
};

const timesCondition = (object: unknown, script: A_CallExpression) =>
  !isNaN(Number(object)) && typeof script.arguments[0] !== undefined;

export { processTimes, timesCondition };
