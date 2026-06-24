import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import type { IShapeOptionsNullable } from "@/@types/IrShape";
import type { ITextOptionsNullable } from "@/@types/IrText";
import { resetCanvas } from "@/contexts/canvas";
import { initConfig } from "@/definition/config";
import { IrShape } from "@/objects/shape";
import { IrText } from "@/objects/text";

const createMockContext = () =>
  ({
    beginPath: vi.fn(),
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    ellipse: vi.fn(),
    fill: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn(),
    measureText: vi.fn((text: string) => ({ width: text.length * 10 })),
    restore: vi.fn(),
    save: vi.fn(),
    scale: vi.fn(),
    strokeRect: vi.fn(),
    strokeText: vi.fn(),
  }) as unknown as CanvasRenderingContext2D;

describe("IrText option schema normalization", () => {
  beforeEach(() => {
    initConfig();
    resetCanvas();
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(() =>
      createMockContext(),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    resetCanvas();
  });

  test("falls back to defaults for non-finite numeric options", () => {
    const text = new IrText({
      alpha: Number.POSITIVE_INFINITY,
      scale: Number.NEGATIVE_INFINITY,
      size: Number.NaN,
      text: "text",
    });

    expect(text.alpha).toBe(0);
    expect(text.scale).toBe(1);
    expect(text.size).toBe(14);
  });

  test("falls back to defaults for strings outside declared unions", () => {
    const text = new IrText({
      filter: "outline",
      mover: "teleport",
      text: "text",
    } as unknown as ITextOptionsNullable);

    expect(text.filter).toBe("");
    expect(text.mover).toBe("");
  });

  test("normalizes invalid assigned option values", () => {
    const text = new IrText({ text: "text" });

    text.alpha = Number.POSITIVE_INFINITY;
    text.color = Number.NaN;
    text.filter = "outline" as never;
    text.mover = "teleport" as never;
    text.size = Number.NaN;
    text.x = Number.POSITIVE_INFINITY;
    text.y = Number.NEGATIVE_INFINITY;
    text.z = Number.NaN;

    expect(text.alpha).toBe(0);
    expect(text.color).toBe(16777215);
    expect(text.filter).toBe("");
    expect(text.mover).toBe("");
    expect(text.size).toBe(14);
    expect(text.x).toBe(0);
    expect(text.y).toBe(0);
    expect(text.z).toBe(0);
  });
});

describe("IrShape option schema normalization", () => {
  beforeEach(() => {
    initConfig();
    resetCanvas();
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(() =>
      createMockContext(),
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    resetCanvas();
  });

  test("falls back to defaults for non-finite numeric options", () => {
    const shape = new IrShape({
      alpha: Number.NEGATIVE_INFINITY,
      height: Number.POSITIVE_INFINITY,
      rotation: Number.NaN,
      width: Number.NaN,
    });

    expect(shape.alpha).toBe(0);
    expect(shape.height).toBe(30);
    expect(shape.rotation).toBe(0);
    expect(shape.width).toBe(30);
  });

  test("falls back to defaults for strings outside declared unions", () => {
    const shape = new IrShape({
      mover: "teleport",
      shape: "triangle",
    } as unknown as IShapeOptionsNullable);

    expect(shape.mover).toBe("");
    expect(shape.shape).toBe("circle");
  });

  test("normalizes invalid assigned option values", () => {
    const shape = new IrShape({});

    shape.alpha = Number.POSITIVE_INFINITY;
    shape.color = Number.NaN;
    shape.height = Number.NEGATIVE_INFINITY;
    shape.mover = "teleport" as never;
    shape.rotation = Number.NaN;
    shape.scale = Number.POSITIVE_INFINITY;
    shape.shape = "triangle" as never;
    shape.width = Number.NaN;
    shape.x = Number.POSITIVE_INFINITY;
    shape.y = Number.NEGATIVE_INFINITY;
    shape.z = Number.NaN;

    expect(shape.alpha).toBe(0);
    expect(shape.color).toBe(16777215);
    expect(shape.height).toBe(30);
    expect(shape.mover).toBe("");
    expect(shape.rotation).toBe(0);
    expect(shape.scale).toBe(1);
    expect(shape.shape).toBe("circle");
    expect(shape.width).toBe(30);
    expect(shape.x).toBe(0);
    expect(shape.y).toBe(0);
    expect(shape.z).toBe(0);
  });
});
