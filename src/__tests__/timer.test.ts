import Core, {
  type A_ANY,
  type A_CallExpression,
  type A_ExpressionStatement,
  type T_scope,
} from "@xpadev-net/niwango-core";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { setCurrentTime } from "@/context";
import { queue, resetQueue } from "@/contexts/queue";
import { processTimer } from "@/functions/timer";

const literal = (value: null | boolean | number | string): A_ANY => ({
  type: "Literal",
  value,
});

const identifier = (name: string): A_ANY => ({
  type: "Identifier",
  name,
});

const callExpression = (callee: A_ANY, args: A_ANY[] = []): A_ANY => ({
  type: "CallExpression",
  callee,
  arguments: args as A_CallExpression["arguments"],
});

const timerScript = (
  timer: A_ANY,
  then: A_ANY | null | Record<string, unknown>,
): A_CallExpression =>
  callExpression(identifier("timer"), [
    timer,
    then as A_ANY,
  ]) as A_CallExpression;

const scopes: T_scope[] = [{}, {}, Core.prototypeScope];

const runTimer = (
  timer: A_ANY,
  then: A_ANY | null | Record<string, unknown>,
) => {
  processTimer(timerScript(timer, then), scopes, {}, []);
};

describe("processTimer", () => {
  beforeEach(() => {
    resetQueue();
    setCurrentTime(100);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("does not enqueue timers with NaN or Infinity offsets", () => {
    runTimer(literal(Number.NaN), literal("then"));
    runTimer(literal(Number.POSITIVE_INFINITY), literal("then"));

    expect(queue).toHaveLength(0);
  });

  test("enqueues timers with negative and zero offsets", () => {
    const then = literal("then");

    runTimer(literal(-1), then);
    runTimer(literal(0), then);

    expect(queue).toHaveLength(2);
    expect(queue[0]).toMatchObject({ script: then, time: 0 });
    expect(queue[1]).toMatchObject({ script: then, time: 100 });
  });

  test("does not enqueue a null then argument", () => {
    const thenKey = ["t", "hen"].join("");
    const parsedArguments = Object.fromEntries([
      ["timer", literal(1)],
      [thenKey, null],
    ]);
    vi.spyOn(Core.utils, "argumentParser").mockReturnValue(parsedArguments);

    processTimer(timerScript(literal(1), literal("unused")), scopes, {}, []);

    expect(queue).toHaveLength(0);
  });

  test("does not enqueue malformed AST-shaped then objects", () => {
    runTimer(literal(1), { type: "CallExpression" });
    runTimer(literal(1), {
      type: "Program",
      body: [{ type: "Literal" }],
    } as Record<string, unknown>);
    runTimer(literal(1), { type: "UnknownExpression" });
    runTimer(literal(1), {
      type: "LambdaExpression",
      body: { type: "BlockStatement", body: [] },
      scopes: {},
    } as Record<string, unknown>);

    expect(queue).toHaveLength(0);
  });

  test("preserves valid executable then ASTs", () => {
    const literalThen = literal(null);
    const callThen = callExpression(identifier("dump"), [literal("ok")]);
    const parsedTimer = Core.parseScript(
      "timer(1, lambda(dump(1)))",
      "timer.test.niwascript",
    ) as { body: A_ExpressionStatement[] };
    const lambdaThen = (parsedTimer.body[0]?.expression as A_CallExpression)
      .arguments[1];

    runTimer(literal(1), literalThen);
    runTimer(literal(2), callThen);
    runTimer(literal(3), lambdaThen as A_ANY);

    expect(queue).toHaveLength(3);
    expect(queue[0]?.script).toBe(literalThen);
    expect(queue[1]?.script).toBe(callThen);
    expect(queue[2]?.script).toBe(lambdaThen);
  });
});
