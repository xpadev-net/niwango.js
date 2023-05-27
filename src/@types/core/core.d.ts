import { A_ANY, T_scope } from "@/@types/ast";

export type IFunction = {
  name: string;
  arguments: string[];
  function: Function;
};

export type IFunctions = { [name: string]: IFunction };

export interface INiwangoCore {
  functions: IFunctions;
  bind: (func: IFunction) => void;
  run: (niwango: A_ANY, scopes: T_scope[]) => void;
}
