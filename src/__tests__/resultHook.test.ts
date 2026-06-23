import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { resetCanvas } from "@/contexts/canvas";
import { resetObjects } from "@/contexts/objectManager";
import { resultHook } from "@/contexts/snapshot";
import { initConfig } from "@/definition/config";
import { IrText } from "@/objects/text";

const createMockContext = () => ({
  clearRect: vi.fn(),
  drawImage: vi.fn(),
  fillRect: vi.fn(),
  fillText: vi.fn(),
  measureText: vi.fn((text: string) => ({
    actualBoundingBoxAscent: 10,
    actualBoundingBoxDescent: 2,
    width: text.length * 10,
  })),
  restore: vi.fn(),
  save: vi.fn(),
  scale: vi.fn(),
  strokeRect: vi.fn(),
  strokeText: vi.fn(),
});

describe("resultHook", () => {
  beforeEach(() => {
    initConfig();
    resetCanvas();
    resetObjects();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test.each([
    { __NIWANGO_LITERAL: "IrObject", __type: "IrText" },
    { __NIWANGO_LITERAL: "IrObject", __type: "IrText", options: {} },
    { __NIWANGO_LITERAL: "IrObject", __type: "IrShape", options: null },
  ])("returns malformed IrObject literal %# unchanged", (input) => {
    expect(() => resultHook(input)).not.toThrow();
    expect(resultHook(input)).toBe(input);
  });

  test("restores a valid IrText literal", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      createMockContext() as unknown as CanvasRenderingContext2D,
    );

    const result = resultHook({
      __NIWANGO_LITERAL: "IrObject",
      __type: "IrText",
      options: {
        __id: "valid-text",
        alpha: 0,
        bold: false,
        color: 0xffffff,
        filter: "",
        mover: "",
        pos: "naka",
        posX: "naka",
        posY: "naka",
        scale: 1,
        size: 14,
        text: "hello",
        visible: true,
        x: 0,
        y: 0,
        z: 0,
      },
    });

    expect(result).toBeInstanceOf(IrText);
  });
});
