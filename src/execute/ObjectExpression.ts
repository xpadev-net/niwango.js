import { execute, getName } from "@/context";

/**
 * オブジェクトを作成する
 * @param script
 * @param scopes
 */
const processObjectExpression = (script: A_ObjectExpression, scopes: T_scope[]) => {
  const object: { [key: string | number | symbol]: unknown } = {};
  for (const item of script.properties) {
    object[getName(item.key, scopes) as string] = execute(item.value, scopes);
  }
  return object;
};

export { processObjectExpression };
