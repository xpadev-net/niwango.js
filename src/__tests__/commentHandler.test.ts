import Core, { type A_ANY } from "@xpadev-net/niwango-core";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import type { Comment } from "@/@types/comment";
import {
  addHandler,
  handlers,
  resetHandlers,
  triggerHandlers,
} from "@/contexts/commentHandler";

const createComment = (vpos: number, message = "hello"): Comment =>
  ({
    _vpos: vpos,
    message,
  }) as Comment;

describe("comment handlers", () => {
  const script: A_ANY = { type: "Raw", value: "script" };
  let execute: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    resetHandlers();
    execute = vi.spyOn(Core, "execute").mockReturnValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("fires handlers before their duration expires", () => {
    const globalScope = {};
    const scopes = [globalScope, {}, Core.prototypeScope];

    addHandler(script, scopes, [], 100, 50);
    triggerHandlers(createComment(120));

    expect(execute).toHaveBeenCalledOnce();
    expect(execute).toHaveBeenCalledWith(script, scopes, [script]);
    expect(globalScope).toMatchObject({ chat: createComment(120) });
    expect(handlers).toHaveLength(1);
  });

  test("removes expired handlers without firing them", () => {
    addHandler(script, [{}], [], 100, 50);

    triggerHandlers(createComment(150));

    expect(execute).not.toHaveBeenCalled();
    expect(handlers).toHaveLength(0);
  });

  test("keeps the handler list bounded while adding after expiry", () => {
    for (let i = 0; i < 100; i++) {
      addHandler(script, [{}], [], i * 2, 1);
    }

    expect(handlers).toHaveLength(1);
  });

  test("preserves handler registration during dispatch", () => {
    const firstScript: A_ANY = { type: "Raw", value: "first" };
    const secondScript: A_ANY = { type: "Raw", value: "second" };
    const scopes = [{}, {}, Core.prototypeScope];

    execute.mockImplementation((executedScript) => {
      if (executedScript === firstScript) {
        addHandler(secondScript, scopes, [], 120, 50);
      }
      return undefined;
    });

    addHandler(firstScript, scopes, [], 100, 50);
    triggerHandlers(createComment(120));

    expect(execute).toHaveBeenCalledTimes(2);
    expect(execute).toHaveBeenNthCalledWith(1, firstScript, scopes, [
      firstScript,
    ]);
    expect(execute).toHaveBeenNthCalledWith(2, secondScript, scopes, [
      secondScript,
    ]);
    expect(handlers).toHaveLength(2);
  });
});
