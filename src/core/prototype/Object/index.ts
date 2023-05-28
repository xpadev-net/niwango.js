import { A_CallExpression, A_MemberExpression, T_scope } from "@/@types/ast";
import { processDef } from "@/core/prototype/Object/def";
import { processGetSlot } from "@/core/prototype/Object/getSlot";
import { processSetSlot } from "@/core/prototype/Object/setSlot";
import { processClone } from "@/core/prototype/Object/clone";

export type PrototypeFunction = (
  script: A_CallExpression & { callee: A_MemberExpression },
  scopes: T_scope[],
  object: { [key: string]: unknown }
) => unknown;

export type PrototypeFunctions = {
  [key: string]:
    | {
        func: PrototypeFunction;
        condition: (object: unknown, script: A_CallExpression) => boolean;
      }
    | PrototypeFunction;
};

const prototypeFunctions = {
  def: processDef,
  getSlot: processGetSlot,
  setSlot: processSetSlot,
  clone: processClone,
};

export { prototypeFunctions };
