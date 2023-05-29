import { A_ANY } from "@/@types/ast";
import { IrFunction } from "@/@types/core/functions";
import { addHandler } from "@/commentHandler";
import { argumentParser, currentTime } from "@/context";
import { execute } from "@/core/coreContext";

const processCommentTrigger: IrFunction = (script, scopes) => {
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
