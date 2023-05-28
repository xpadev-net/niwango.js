import { A_CallExpression, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";

/**
 * @関数
 * whileループ用関数
 * @param script
 * @param scopes
 */
const processWhileKari = (script: A_CallExpression, scopes: T_scope[]) => {
  if (!(script.arguments[0] && script.arguments[1])) {
    return;
  }
  let loopCount = 0;
  while (execute(script.arguments[0], scopes) && loopCount++ <= 10000) {
    execute(script.arguments[1], scopes);
  }
};

export { processWhileKari };
