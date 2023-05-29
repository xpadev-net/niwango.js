import { A_LambdaExpression, T_scope } from "@/@types/ast";

const processLambdaExpression = (
  script: A_LambdaExpression,
  scopes: T_scope[]
): A_LambdaExpression => {
  return { ...script, scopes };
};

export { processLambdaExpression };
