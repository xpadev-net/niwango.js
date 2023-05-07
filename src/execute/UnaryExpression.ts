import { BitwiseNOT, LogicalNot, UnaryNegation, UnaryPlus } from "@/operators";
import { NotImplementedError } from "@/errors/NotImplementedError";
import { execute } from "@/context";

/**
 * 単項式を実行する
 * @param script
 * @param scopes
 */
const processUnaryExpression = (script: A_UnaryExpression, scopes: T_scope[]) => {
  const value = execute(script.argument, scopes);
  if (script.operator === "-") {
    return UnaryNegation(value);
  } else if (script.operator === "+") {
    return UnaryPlus(value);
  } else if (script.operator === "~") {
    return BitwiseNOT(value);
  } else if (script.operator === "!") {
    return LogicalNot(value);
  }
  throw new NotImplementedError("unary expression", script, scopes);
};

export { processUnaryExpression };
