import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { resetCanvas } from "@/contexts/canvas";
import { config, initConfig } from "@/definition/config";
import { IrText } from "@/objects/text";
import { measure, parse } from "@/utils/flashText";

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

describe("flash text newline normalization", () => {
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
    "a\nb",
    "a\r\nb",
    "a\rb",
  ])("parses %j as two normalized lines", (text) => {
    const parsed = parse(text);

    expect(parsed.lineCount).toBe(2);
    expect(
      parsed.content.every(
        (item) => item.type !== "normal" || !item.content.includes("\r"),
      ),
    ).toBe(true);
  });

  test("measures LF, CRLF, and CR text with the same height", () => {
    const context = createMockContext();

    const heights = ["a\nb", "a\r\nb", "a\rb"].map((text) => {
      const parsed = parse(text);
      return measure(context as unknown as CanvasRenderingContext2D, {
        ...parsed,
        size: 20,
      }).height;
    });

    expect(heights).toEqual([
      20 * config.lineHeight * 2 + config.commentYPaddingTop,
      20 * config.lineHeight * 2 + config.commentYPaddingTop,
      20 * config.lineHeight * 2 + config.commentYPaddingTop,
    ]);
  });

  test.each([
    "a\nb",
    "a\r\nb",
    "a\rb",
  ])("draws %j with the same visible line positions", (text) => {
    new IrText({ text, size: 20 });
    const context = contexts.at(-1);
    if (!context) throw new Error("missing mocked canvas context");
    const visibleTextCalls = context.fillText.mock.calls.filter(
      (call) => call[0] !== "",
    );

    expect(visibleTextCalls).toHaveLength(2);
    expect(visibleTextCalls.map((call) => call[0])).toEqual(["a", "b"]);
    const firstCall = visibleTextCalls[0];
    const secondCall = visibleTextCalls[1];
    if (!firstCall || !secondCall) throw new Error("missing fillText call");
    const firstY = Number(firstCall[2]);
    const secondY = Number(secondCall[2]);
    expect(secondY - firstY).toBe(20 * config.lineHeight);
  });
});
