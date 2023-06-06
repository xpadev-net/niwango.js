import Core from "@xpadev-net/niwango-core";
import { IrFunction } from "@xpadev-net/niwango-core";

import { A_ANY } from "@/@types/ast";
import { addHandler } from "@/commentHandler";
import { currentTime } from "@/context";

const processCommentTrigger: IrFunction = (script, scopes) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    ["then", "timer"],
    false
  );
  addHandler(
    args.then as A_ANY,
    scopes,
    currentTime,
    args.timer ? Number(Core.execute(args.timer, scopes)) : undefined
  );
};

export { processCommentTrigger };
