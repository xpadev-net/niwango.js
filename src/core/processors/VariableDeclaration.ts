import { A_CallExpression, A_VariableDeclaration, T_scope } from "@/@types/ast";
import { getName } from "@/context";
import { execute } from "@/core/coreContext";

/**
 * 変数宣言を実行する
 * または関数を実行する
 * @param script
 * @param scopes
 */
const processVariableDeclaration = (
  script: A_VariableDeclaration,
  scopes: T_scope[]
) => {
  let lastItem;
  for (const item of script.declarations) {
    if (item.init === null) {
      return execute(
        {
          type: "CallExpression",
          callee: item.id,
          arguments: [],
        } as A_CallExpression,
        scopes
      );
    } else {
      if (scopes[0]) {
        lastItem = scopes[0][getName(item.id, scopes) as string] = execute(
          item.init,
          scopes
        );
      }
    }
  }
  return lastItem;
};
export { processVariableDeclaration };
