import type { A_ANY } from "@xpadev-net/niwango-core";
import { beforeEach, describe, expect, test } from "vitest";

import { setCurrentTime } from "@/context";
import { addQueue, getQueue, queue, resetQueue } from "@/contexts/queue";

const script = (value: string): A_ANY => ({ type: "Raw", value });

describe("queue context", () => {
  beforeEach(() => {
    resetQueue();
    setCurrentTime(100);
  });

  test("returns due queue items and removes only those entries", () => {
    const pastScript = script("past");
    const dueScript = script("due");
    const futureScript = script("future");
    const scopes = [{ name: "scope" }];
    const trace = [script("trace")];

    addQueue(pastScript, -1, scopes, trace);
    addQueue(dueScript, 0, scopes, trace);
    addQueue(futureScript, 1, scopes, trace);

    expect(getQueue(100)).toEqual([
      expect.objectContaining({
        scopes,
        script: pastScript,
        time: 0,
        trace,
        type: "queue",
      }),
      expect.objectContaining({
        scopes,
        script: dueScript,
        time: 100,
        trace,
        type: "queue",
      }),
    ]);
    expect(queue).toEqual([
      expect.objectContaining({
        scopes,
        script: futureScript,
        time: 200,
        trace,
        type: "queue",
      }),
    ]);
  });

  test("keeps future queue entries available for a later vpos", () => {
    const futureScript = script("future");
    const scopes = [{}];
    const trace: A_ANY[] = [];

    addQueue(futureScript, 2, scopes, trace);

    expect(getQueue(199)).toEqual([]);
    expect(queue).toHaveLength(1);
    expect(getQueue(300)).toEqual([
      expect.objectContaining({
        scopes,
        script: futureScript,
        time: 300,
        trace,
        type: "queue",
      }),
    ]);
    expect(queue).toHaveLength(0);
  });
});
