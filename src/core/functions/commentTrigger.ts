import { A_ANY } from "@/@types/ast";
import { argumentParser, currentTime } from "@/context";
import { addHandler } from "@/commentHandler";
import { execute } from "@/core/coreContext";
import { IrFunction } from "@/@types/core/functions";

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
