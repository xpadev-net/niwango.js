import { execute, getName } from "@/context";

/**
 * 変数宣言を実行する
 * または関数を実行する
 * @param script
 * @param scopes
 */
const processVariableDeclaration = (script: A_VariableDeclaration, scopes: T_scope[]) => {
  for (const item of script.declarations) {
    if (item.init === null) {
      return execute(
        {
          type: "CallExpression",
          callee: item.id,
          arguments: [],
        } as A_CallExpression,
        scopes,
      );
    } else {
      if (scopes[0]) {
        scopes[0][getName(item.id, scopes) as string] = execute(item.init, scopes);
      }
    }
  }
};
export { processVariableDeclaration };
