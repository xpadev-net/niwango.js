import { A_ANY, Argument, T_scope } from "@/@types/ast";
import { ArgumentParser } from "@/@types/execute";
import { execute, getName, setArgumentParser } from "@/context";

/**
 * callExpressionの引数をパースする
 * @param inputs
 * @param scopes
 * @param keys
 * @param compute
 */
const argumentParser: ArgumentParser = (
  inputs: Argument<A_ANY>[],
  scopes: T_scope[],
  keys: string[],
  compute = true
): { [key: string]: unknown } => {
  const result: { [key: string]: unknown } = {};
  const nonKeyValues: Argument<A_ANY>[] = [];
  for (const item of inputs) {
    if (item.NIWANGO_Identifier) {
      const key = getName(item.NIWANGO_Identifier, scopes) as string;
      if (keys.includes(key)) {
        result[key] = compute ? execute(item, scopes) : item;
        continue;
      }
    }
    nonKeyValues.push(item);
  }
  let i = 0;
  for (const key of keys) {
    const value = nonKeyValues[i];
    if (!result[key] && value) {
      result[key] = compute ? execute(value, scopes) : value;
      i++;
    }
  }
  return result;
};

const initArgumentParser = () => {
  setArgumentParser(argumentParser);
};

export { initArgumentParser };
