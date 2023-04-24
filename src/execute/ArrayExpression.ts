import { Utils } from "@/@types/execute";

const processArrayExpression = (script: A_ArrayExpression, scopes: T_scope[], { execute }: Utils) => {
  return script.elements.reduce((result, element) => {
    return [...result, execute(element, scopes)];
  }, [] as unknown[]);
};
export { processArrayExpression };
