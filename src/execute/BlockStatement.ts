import { execute } from "@/context";

const processBlockStatement = (script: A_BlockStatement, scopes: T_scope[]) => {
  return script.body.reduce((_, item) => execute(item, scopes), undefined as unknown);
};

export { processBlockStatement };
