import { Utils } from "@/@types/execute";

const processProgram = (script: A_Program, scopes: T_scope[], { execute }: Utils) => {
  let lastValue;
  for (const i in script.body) {
    const item = script.body[i];
    lastValue = execute(item, scopes);
  }
  return lastValue;
};

export { processProgram };
