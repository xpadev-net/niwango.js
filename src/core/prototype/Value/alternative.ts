import { argumentParser } from "@/context";
import { execute } from "@/core/coreContext";
import { PrototypeValueFunction } from "@/core/prototype/Value/index";

const processAlternative: PrototypeValueFunction = (script, scopes, object) => {
  const args = argumentParser(
    script.arguments,
    scopes,
    ["then", "else"],
    false
  );
  if (object && args.then) {
    return execute(args.then, scopes);
  } else if (!object && args.else) {
    return execute(args.else, scopes);
  }
  return;
};

export { processAlternative };
