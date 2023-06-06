import Core from "@xpadev-net/niwango-core";
import { IrFunction } from "@xpadev-net/niwango-core";

import { A_ANY, A_CallExpression, T_scope } from "@/@types/ast";
import { addQueue } from "@/queue";

const processTimer: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[]
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    ["timer", "then"],
    false
  );
  typeof args.then === "object" &&
    addQueue(
      args.then as A_ANY,
      Number(Core.execute(args.timer, scopes)),
      scopes
    );
};

export { processTimer };
