import { A_ArrowFunctionExpression, T_scope } from "@/@types/ast";
import { execute } from "@/context";

const processArrowFunctionExpression = (
  script: A_ArrowFunctionExpression,
  scopes: T_scope[]
) => {
  return execute(script.body, scopes);
};

export { processArrowFunctionExpression };
