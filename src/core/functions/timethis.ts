import { A_CallExpression, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";

const processTimethis = (script: A_CallExpression, scopes: T_scope[]) => {
  console.time("timethis");
  const result = execute(script.arguments[0], scopes);
  console.timeEnd("timethis");
  return result;
};

export { processTimethis };
