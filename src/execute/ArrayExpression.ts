import { A_ArrayExpression, T_scope } from "@/@types/ast";
import { execute } from "@/context";

/**
 * 配列作成関数
 * @param script
 * @param scopes
 */
const processArrayExpression = (
  script: A_ArrayExpression,
  scopes: T_scope[]
) => {
  return script.elements.reduce((result, element) => {
    return [...result, execute(element, scopes)];
  }, [] as unknown[]);
};
export { processArrayExpression };
