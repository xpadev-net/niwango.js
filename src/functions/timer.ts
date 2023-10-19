import Core from "@xpadev-net/niwango-core";
import { IrFunction } from "@xpadev-net/niwango-core";
import { A_ANY, A_CallExpression, T_scope } from "@xpadev-net/niwango-core";

import { addQueue } from "@/contexts/queue";

const processTimer: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  _,
  trace: A_ANY[],
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    ["timer", "then"],
    trace,
    false,
  );
  typeof args.then === "object" &&
    addQueue(
      args.then as A_ANY,
      Number(Core.execute(args.timer, scopes, trace)),
      scopes,
      [...trace],
    );
};

export { processTimer };
