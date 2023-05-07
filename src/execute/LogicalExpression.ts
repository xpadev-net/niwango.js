import { NotImplementedError } from "@/errors/NotImplementedError";
import { execute } from "@/context";

/**
 * 論理式を実行する
 * @param script
 * @param scopes
 */
const processLogicalExpression = (script: A_LogicalExpression, scopes: T_scope[]): unknown => {
  const left = execute(script.left, scopes);
  const right = execute(script.right, scopes);
  if (script.operator === "&&") {
    return left && right;
  } else if (script.operator === "||") {
    return left || right;
  }
  throw new NotImplementedError("logical expression", script, scopes);
};

export { processLogicalExpression };
