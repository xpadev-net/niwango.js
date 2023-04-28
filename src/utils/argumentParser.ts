import { execute, getName, setArgumentParser } from "@/context";
import { ArgumentParser } from "@/@types/execute";

const argumentParser: ArgumentParser = (
  inputs: Argument<A_ANY>[],
  scopes: T_scope[],
  keys: string[],
  compute: boolean = true,
): { [key: string]: unknown } => {
  const result: { [key: string]: unknown } = {};
  const nonKeyValues: Argument<A_ANY>[] = [];
  for (const i in inputs) {
    const item = inputs[i];
    if (!item) {
      continue;
    }
    if (item?.NIWANGO_Identifier) {
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
