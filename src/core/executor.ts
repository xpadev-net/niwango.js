import { T_scope } from "@/@types/ast";
import { Execute } from "@/@types/execute";
import { setExecute } from "@/core/coreContext";
import { processors } from "@/core/processors";
import { NotImplementedError } from "@/errors/NotImplementedError";
import typeGuard from "@/typeGuard";

/**
 * ASTを実行する関数
 * @param script
 * @param scopes
 */
const execute: Execute = (script: unknown, scopes: T_scope[]): unknown => {
  if (!script || !typeGuard.AST(script)) return;
  const processor = processors[script.type];
  if (processor) {
    return processor(script, scopes);
  }
  throw new NotImplementedError(script.type, script, scopes);
};

const initExecute = () => {
  setExecute(execute);
};

export { initExecute };
