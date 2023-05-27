import type { A_ANY, Argument, T_scope } from "@/@types/ast";

export type Execute = (script: unknown, scopes: T_scope[]) => unknown;
export type Assign = (target: A_ANY, value: unknown, scopes: T_scope[]) => void;
export type ArgumentParser = (
  inputs: Argument<A_ANY>[],
  scopes: T_scope[],
  keys: string[],
  compute?: boolean
) => { [key: string]: unknown };
export type GetName = (target: A_ANY, scopes: T_scope[]) => unknown;
