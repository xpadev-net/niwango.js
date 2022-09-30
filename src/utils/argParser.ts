import { execute } from "@/executor";

const argParser = (args: A_ANY[]) => {
  for (const i in args) {
    const arg = args[i];
    if (!arg) continue;
    execute(arg, []);
  }
};
export { argParser };
