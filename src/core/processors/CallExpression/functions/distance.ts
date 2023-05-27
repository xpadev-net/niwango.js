import { argumentParser } from "@/context";
import { A_CallExpression, T_scope } from "@/@types/ast";

const processDistance = (script: A_CallExpression, scopes: T_scope[]) => {
  const args = argumentParser(script.arguments, scopes, [
    "x1",
    "y1",
    "x2",
    "y2",
  ]);
  return Math.sqrt(
    Math.pow(Number(args.x2) - Number(args.x1), 2) +
      Math.pow(Number(args.y2) - Number(args.y1), 2)
  );
};

export { processDistance };
