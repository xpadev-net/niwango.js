import { Utils } from "@/@types/execute";

const processSequenceExpression = (script: A_SequenceExpression, scopes: T_scope[], { execute }: Utils) => {
  return script.expressions.reduce((_, arg) => execute(arg, scopes), undefined as unknown);
};

export { processSequenceExpression };
