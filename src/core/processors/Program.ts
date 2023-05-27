import { A_Program, T_scope } from "@/@types/ast";
import { execute } from "@/context";

/**
 * 含まれる式すべてを実行する
 * @param script
 * @param scopes
 */
const processProgram = (script: A_Program, scopes: T_scope[]) => {
  return script.body.reduce(
    (_, item) => execute(item, scopes),
    undefined as unknown
  );
};

export { processProgram };
