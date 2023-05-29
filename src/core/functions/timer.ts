import { A_ANY, A_CallExpression, T_scope } from "@/@types/ast";
import { IrFunction } from "@/@types/core/functions";
import { argumentParser } from "@/context";
import { execute } from "@/core/coreContext";
import { addQueue } from "@/queue";

const processTimer: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[]
) => {
  const args = argumentParser(
    script.arguments,
    scopes,
    ["timer", "then"],
    false
  );
  typeof args.then === "object" &&
    addQueue(args.then as A_ANY, Number(execute(args.timer, scopes)), scopes);
};

export { processTimer };
