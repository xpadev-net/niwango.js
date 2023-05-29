import { A_ReturnStatement, T_scope } from "@/@types/ast";
import { execute } from "@/core/coreContext";

const processReturnStatement = (
  script: A_ReturnStatement,
  scopes: T_scope[]
) => {
  return execute(script.argument, scopes);
};

export { processReturnStatement };
