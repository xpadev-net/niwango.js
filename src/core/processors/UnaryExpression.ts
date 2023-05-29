import { A_UnaryExpression, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";
import {
  BitwiseNOT,
  LogicalNot,
  UnaryNegation,
  UnaryPlus,
} from "@/core/operators";
import { NotImplementedError } from "@/errors/NotImplementedError";

/**
 * 単項式を実行する
 * @param script
 * @param scopes
 */
const processUnaryExpression = (
  script: A_UnaryExpression,
  scopes: T_scope[]
) => {
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
  throw new NotImplementedError(script, scopes);
};

export { processUnaryExpression };
