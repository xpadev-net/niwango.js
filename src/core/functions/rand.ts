import typeGuard from "@/typeGuard";
import { mt19937 } from "@/utils/mt19937";
import { execute } from "@/core/coreContext";
import { A_CallExpression, T_scope } from "@/@types/ast";

let randCalledCount = 0;
const onload = new Date().getTime();
/**
 * mt19937で乱数を生成する
 * オリジナルのとおりに実装してるはずだけど何故か結果が違う
 * どうして...
 * @param value
 */
const rand = (value?: unknown) => {
  let seed = 0;
  if (typeof value === "undefined") {
    seed = onload + randCalledCount++;
  } else if (typeof value === "number") {
    seed = value;
  } else if (typeof value === "string") {
    for (let i = 0; i < value.length; i++) {
      seed = seed * 31 + value.charCodeAt(i);
    }
  } else if (typeGuard.comment.comment(value)) {
    seed = (value.vpos * 100 + 1) * value.id;
  }
  const result = mt19937(seed);
  return result < 0 ? -(result + 1) : result;
};

const processRand = (script: A_CallExpression, scopes: T_scope[]) => {
  if (script.arguments[0]) {
    return rand(execute(script.arguments[0], scopes));
  }
  return rand();
};

export { processRand };
