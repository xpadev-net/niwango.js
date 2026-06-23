import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { resetCanvas } from "@/contexts/canvas";
import { config, initConfig } from "@/definition/config";
import { IrText } from "@/objects/text";
import { parseFont } from "@/utils/utils";

type FontUse = {
  type: "measure" | "fill";
  font: string;
};

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

const createMockContext = (fontUses: FontUse[]): MockCanvasContext => {
  let currentFont = "";
  return {
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn(() => {
      fontUses.push({ type: "fill", font: currentFont });
    }),
    measureText: vi.fn(() => {
      fontUses.push({ type: "measure", font: currentFont });
      return { width: currentFont.startsWith("700") ? 18 : 12 };
    }),
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

describe("drawText bold font weight", () => {
  let fontUses: FontUse[];

  beforeEach(() => {
    initConfig();
    resetCanvas();
    fontUses = [];
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
      () => createMockContext(fontUses) as unknown as CanvasRenderingContext2D,
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    resetCanvas();
  });

  test("keeps the configured weight for measurement and drawing when bold is false", () => {
    new IrText({ text: "text", size: 20, bold: false });

    expect(fontUses).toContainEqual({
      type: "measure",
      font: expect.stringMatching(/^600 20px /),
    });
    expect(fontUses).toContainEqual({
      type: "fill",
      font: expect.stringMatching(/^600 20px /),
    });
  });

  test("uses a bolder weight for measurement and drawing when bold is true", () => {
    new IrText({ text: "text", size: 20, bold: true });

    expect(fontUses).toContainEqual({
      type: "measure",
      font: expect.stringMatching(/^700 20px /),
    });
    expect(fontUses).toContainEqual({
      type: "fill",
      font: expect.stringMatching(/^700 20px /),
    });
  });

  test("promotes CSS keyword font weights without replacing the style token", () => {
    config.fonts.defont.weight = "normal";
    config.font.gulim = "normal normal [size]px gulim, sans-serif";

    expect(parseFont("defont", 20, { bold: true })).toMatch(/^bold 20px /);
    expect(parseFont("gulim", 20, { bold: true })).toBe(
      "normal bold 20px gulim, sans-serif",
    );
  });

  test("adds a bold weight when a font template omits weight", () => {
    config.font.gulim = "[size]px gulim, sans-serif";

    expect(parseFont("gulim", 20, { bold: true })).toBe(
      "700 20px gulim, sans-serif",
    );
  });
});
