import Core, {
  type A_ANY,
  type A_CallExpression,
} from "@xpadev-net/niwango-core";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { setCurrentTime } from "@/context";
import { handlers, resetHandlers } from "@/contexts/commentHandler";
import { processCommentTrigger } from "@/functions/commentTrigger";

const literal = (value: null | boolean | number | string): A_ANY => ({
  type: "Literal",
  value,
});

const callExpression = (name: string, args: A_ANY[] = []): A_CallExpression =>
  ({
    type: "CallExpression",
    callee: { type: "Identifier", name },
    arguments: args,
  }) as A_CallExpression;

const parsedArguments = (
  thenScript: A_ANY,
  timerScript?: A_ANY,
): Record<string, unknown> => {
  const args: Record<string, unknown> = {};
  Object.defineProperty(args, ["th", "en"].join(""), { value: thenScript });
  if (timerScript) {
    args.timer = timerScript;
  }
  return args;
};

describe("processCommentTrigger", () => {
  beforeEach(() => {
    resetHandlers();
    setCurrentTime(250);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("registers a comment handler at the current vpos", () => {
    const thenScript = literal("then");
    const scopes = [{}, {}, Core.prototypeScope];
    const trace = [literal("trace")];
    const argumentParser = vi
      .spyOn(Core.utils, "argumentParser")
      .mockReturnValue(parsedArguments(thenScript));
    const script = callExpression("commentTrigger");

    processCommentTrigger(script, scopes, {}, trace);

    expect(argumentParser).toHaveBeenCalledWith(
      script.arguments,
      scopes,
      ["then", "timer"],
      trace,
      false,
    );
    expect(handlers).toEqual([
      expect.objectContaining({
        duration: undefined,
        scopes,
        script: thenScript,
        time: 250,
        trace,
        type: "commentHandler",
      }),
    ]);
  });

  test("uses the evaluated timer argument as the handler duration", () => {
    const thenScript = literal("then");
    const timerScript = literal("timer");
    const scopes = [{}, {}, Core.prototypeScope];
    const trace = [literal("trace")];
    const argumentParser = vi
      .spyOn(Core.utils, "argumentParser")
      .mockReturnValue(parsedArguments(thenScript, timerScript));
    const execute = vi.spyOn(Core, "execute").mockReturnValue(75);
    const script = callExpression("ctrig");

    processCommentTrigger(script, scopes, {}, trace);

    expect(argumentParser).toHaveBeenCalledWith(
      script.arguments,
      scopes,
      ["then", "timer"],
      trace,
      false,
    );
    expect(execute).toHaveBeenCalledWith(timerScript, scopes, trace);
    expect(handlers).toEqual([
      expect.objectContaining({
        duration: 75,
        script: thenScript,
        time: 250,
      }),
    ]);
  });
});
