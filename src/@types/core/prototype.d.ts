import { A_CallExpression, T_scope } from "@/@types/ast";

export type PrototypeFunction<T> = (
  script: A_CallExpression,
  scopes: T_scope[],
  object: T
) => unknown;

export type PrototypeFunctions<T> = {
  [key: string]: PrototypeFunction<T>;
};

export type prototypeType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "undefined"
  | "object"
  | "array"
  | "function"
  | "bigint"
  | "symbol";

export type ResolveResult = PrototypeFunction<unknown> | undefined;

export type ResolvePrototype = (
  type: prototypeType,
  name: string
) => ResolveResult;
