import type { A_ANY, A_CallExpression } from "@/@types/ast";

export type definedFunction =
  | {
      type: "definedFunction";
      isKari: true;
      script: A_CallExpression;
    }
  | {
      type: "definedFunction";
      isKari: false;
      script: {
        type: "CallExpression";
        callee: A_ANY;
        arguments: [A_CallExpression, A_ANY];
      };
    };
