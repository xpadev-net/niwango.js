import { A_ANY } from "@/@types/ast";

import { parse, SyntaxError as PeggySyntaxError } from "./parser";

const parseScript = (content: string, name: string): A_ANY => {
  let script = content;
  if (script.startsWith("/")) {
    script = script.slice(1);
  }
  let firstError = undefined;
  for (let i = 0; i < 100; i++) {
    try {
      return parse(script, { grammarSource: name });
    } catch (e) {
      firstError ??= e;
      if (!(e instanceof PeggySyntaxError)) {
        throw e;
      }
      console.info(e.format([{ source: name, text: script }]));
      if (
        script.length < 1 ||
        script.slice(0, e.location.start.offset) === script
      )
        throw firstError;
      script = script.slice(0, e.location.start.offset);
    }
  }
  throw firstError;
};

export { parseScript };
