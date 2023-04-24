import { Utils } from "@/@types/execute";

const processBlockStatement = (script: A_BlockStatement, scopes: T_scope[], { execute }: Utils) => {
  return script.body.reduce((_, item) => execute(item, scopes), undefined as unknown);
};

export { processBlockStatement };
