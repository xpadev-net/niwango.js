import { A_CallExpression, A_MemberExpression, T_scope } from "@/@types/ast";

export type PrototypeFunction<T> = (
  script: A_CallExpression & { callee: A_MemberExpression },
  scopes: T_scope[],
  object: T
) => unknown;

export type PrototypeFunctions<T> = {
  [key: string]:
    | {
        func: PrototypeFunction<T>;
        condition: (object: unknown, script: A_CallExpression) => boolean;
      }
    | PrototypeFunction<T>;
};
