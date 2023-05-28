import { A_CallExpression, A_MemberExpression, T_scope } from "@/@types/ast";

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
