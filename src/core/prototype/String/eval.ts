import { PrototypeStringFunction } from "@/core/prototype/String/index";
import { parseScript } from "@/parser/parse";
import { execute } from "@/core/coreContext";

const processEval: PrototypeStringFunction = (_script, scopes, object) => {
  try {
    const script = parseScript(object, "[eval]");
    return execute(script, scopes);
  } catch (e) {
    return undefined;
  }
};

export { processEval };
