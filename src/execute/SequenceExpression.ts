import { execute } from "@/context";

const processSequenceExpression = (script: A_SequenceExpression, scopes: T_scope[]) => {
  return script.expressions.reduce((_, arg) => execute(arg, scopes), undefined as unknown);
};

export { processSequenceExpression };
