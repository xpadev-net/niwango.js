import { A_UpdateExpression, T_scope } from "@/@types/ast";
import { assign, execute } from "@/context";
import { NotImplementedError } from "@/errors/NotImplementedError";
import { Addition, Subtraction } from "@/operators";

/**
 * 更新式を実行する
 * @param script
 * @param scopes
 */
const processUpdateExpression = (
  script: A_UpdateExpression,
  scopes: T_scope[]
) => {
  const value = execute(script.argument, scopes);
  if (script.operator === "--") {
    const result = Subtraction(value, 1);
    assign(script.argument, result, scopes);
    if (script.prefix) {
      return result;
    } else {
      return value;
    }
  } else if (script.operator === "++") {
    const result = Addition(value, 1);
    assign(script.argument, result, scopes);
    if (script.prefix) {
      return result;
    } else {
      return value;
    }
  }
  throw new NotImplementedError("update expression", script, scopes);
};

export { processUpdateExpression };
