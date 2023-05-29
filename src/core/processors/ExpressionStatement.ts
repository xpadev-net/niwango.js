import { A_ExpressionStatement, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";

const processExpressionStatement = (
  script: A_ExpressionStatement,
  scopes: T_scope[]
) => {
  return execute(script.expression, scopes);
};

export { processExpressionStatement };
