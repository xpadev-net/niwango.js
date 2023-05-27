import { A_SequenceExpression, T_scope } from "@/@types/ast";
import { execute } from "@/context";

/**
 * 含まれる式すべてを実行する
 * @param script
 * @param scopes
 */
const processSequenceExpression = (
  script: A_SequenceExpression,
  scopes: T_scope[]
) => {
  return script.expressions.reduce(
    (_, arg) => execute(arg, scopes),
    undefined as unknown
  );
};

export { processSequenceExpression };
