import { execute } from "@/context";

const processArrayExpression = (script: A_ArrayExpression, scopes: T_scope[]) => {
  return script.elements.reduce((result, element) => {
    return [...result, execute(element, scopes)];
  }, [] as unknown[]);
};
export { processArrayExpression };
