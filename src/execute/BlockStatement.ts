import { execute } from "@/context";

/**
 * ブロック文を実行する
 * 返り値は最後に実行した式の返り値
 * @param {A_BlockStatement} script
 * @param {T_scope[]} scopes
 */
const processBlockStatement = (script: A_BlockStatement, scopes: T_scope[]) => {
  return script.body.reduce((_, item) => execute(item, scopes), undefined as unknown);
};

export { processBlockStatement };
