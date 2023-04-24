import { Utils } from "@/@types/execute";

const processObjectExpression = (script: A_ObjectExpression, scopes: T_scope[], { execute, getName }: Utils) => {
  const object: { [key: string | number | symbol]: unknown } = {};
  for (const item of script.properties) {
    object[getName(item.key, scopes) as string] = execute(item.value, scopes);
  }
  return object;
};

export { processObjectExpression };
