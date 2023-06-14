import Core from "@xpadev-net/niwango-core";
import { IrFunction } from "@xpadev-net/niwango-core";
import { A_ANY } from "@xpadev-net/niwango-core";

import { addHandler } from "@/commentHandler";
import { currentTime } from "@/context";

const processCommentTrigger: IrFunction = (script, scopes, _, trace) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    ["then", "timer"],
    trace,
    false
  );
  addHandler(
    args.then as A_ANY,
    scopes,
    currentTime,
    args.timer ? Number(Core.execute(args.timer, scopes, trace)) : undefined
  );
};

export { processCommentTrigger };
