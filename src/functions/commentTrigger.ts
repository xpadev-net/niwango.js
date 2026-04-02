import Core, { type A_ANY, type IrFunction } from "@xpadev-net/niwango-core";

import { currentTime } from "@/context";
import { addHandler } from "@/contexts/commentHandler";

const processCommentTrigger: IrFunction = (script, scopes, _, trace) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    ["then", "timer"],
    trace,
    false,
  );
  addHandler(
    args.then as A_ANY,
    scopes,
    trace,
    currentTime,
    args.timer ? Number(Core.execute(args.timer, scopes, trace)) : undefined,
  );
};

export { processCommentTrigger };
