import { describe, expect, test } from "vitest";

import { resultHook } from "@/contexts/snapshot";

describe("resultHook", () => {
  test.each([
    { __NIWANGO_LITERAL: "IrObject", __type: "IrText" },
    { __NIWANGO_LITERAL: "IrObject", __type: "IrText", options: {} },
    { __NIWANGO_LITERAL: "IrObject", __type: "IrShape", options: null },
  ])("returns malformed IrObject literal %# unchanged", (input) => {
    expect(() => resultHook(input)).not.toThrow();
    expect(resultHook(input)).toBe(input);
  });
});
