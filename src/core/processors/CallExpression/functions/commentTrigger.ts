import { A_ANY, A_CallExpression, T_scope } from "@/@types/ast";
import { argumentParser, currentTime, execute } from "@/context";
import { addHandler } from "@/commentHandler";

const processCommentTrigger = (script: A_CallExpression, scopes: T_scope[]) => {
  const args = argumentParser(
    script.arguments,
    scopes,
    ["then", "timer"],
    false
  );
  addHandler(
    args.then as A_ANY,
    scopes,
    currentTime,
    args.timer ? Number(execute(args.timer, scopes)) : undefined
  );
};

export { processCommentTrigger };
