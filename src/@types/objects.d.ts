import type { A_ANY, T_environment, T_scope } from "@/@types/ast";

export type TObjects = {
  scopes: {
    global: T_scope;
    environment: T_environment;
  };
};

export type TQueue = {
  script: A_ANY;
  time: number;
  scopes: T_scope[];
  type: "queue";
};
