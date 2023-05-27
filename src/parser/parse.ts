import { CommentMapper } from "@/commentMapper";

import { parse, SyntaxError as PeggySyntaxError } from "./parser";

const parseScript = (comment: CommentMapper): A_ANY => {
  let script = comment.message.slice(1);
  let firstError = undefined;
  while (true) {
    try {
      return parse(script, { grammarSource: `${comment.no}.niwascript` });
    } catch (e) {
      firstError ??= e;
      if (!(e instanceof PeggySyntaxError)) {
        throw e;
      }
      console.info(
        e.format([{ source: `${comment.no}.niwascript`, text: script }])
      );
      if (
        script.length < 1 ||
        script.slice(0, e.location.start.offset) === script
      )
        throw firstError;
      script = script.slice(0, e.location.start.offset);
    }
  }
};

export { parseScript };
