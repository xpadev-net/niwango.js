import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { resetCanvas } from "@/contexts/canvas";
import { config, initConfig } from "@/definition/config";
import { IrText } from "@/objects/text";

type MockCanvasContext = {
  clearRect: ReturnType<typeof vi.fn>;
  drawImage: ReturnType<typeof vi.fn>;
  fillRect: ReturnType<typeof vi.fn>;
  fillText: ReturnType<typeof vi.fn>;
  measureText: ReturnType<typeof vi.fn>;
  restore: ReturnType<typeof vi.fn>;
  save: ReturnType<typeof vi.fn>;
  scale: ReturnType<typeof vi.fn>;
  strokeRect: ReturnType<typeof vi.fn>;
  strokeText: ReturnType<typeof vi.fn>;
  font: string;
};

const createMockContext = (): MockCanvasContext => {
  let currentFont = "";
  return {
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn(),
    measureText: vi.fn((text: string) => ({ width: text.length * 10 })),
    restore: vi.fn(),
    save: vi.fn(),
    scale: vi.fn(),
    strokeRect: vi.fn(),
    strokeText: vi.fn(),
    get font() {
      return currentFont;
    },
    set font(value: string) {
      currentFont = value;
    },
  };
};

describe("drawText reversed coordinates", () => {
  let contexts: MockCanvasContext[];

  beforeEach(() => {
    initConfig();
    resetCanvas();
    contexts = [];
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
      () => {
        const context = createMockContext();
        contexts.push(context);
        return context as unknown as CanvasRenderingContext2D;
      },
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    resetCanvas();
  });

  test.each([
    { options: { text: "abc", size: -20 }, label: "negative size" },
    { options: { text: "abc", size: 20, scale: -1 }, label: "negative scale" },
  ])("compensates flipped text coordinates by width and height for $label", ({
    options,
  }) => {
    new IrText(options);
    const context = contexts.at(-1);
    if (!context) throw new Error("missing mocked canvas context");

    expect(context.scale).toHaveBeenCalledWith(-1, -1);
    expect(context.fillText).toHaveBeenCalledWith(
      "abc",
      -30,
      20 - (20 * config.lineHeight + config.commentYPaddingTop),
    );
  });

  test("keeps non-reversed text coordinates unchanged", () => {
    new IrText({ text: "abc", size: 20 });
    const context = contexts.at(-1);
    if (!context) throw new Error("missing mocked canvas context");

    expect(context.scale).not.toHaveBeenCalled();
    expect(context.fillText).toHaveBeenCalledWith("abc", 0, 20);
  });
});
