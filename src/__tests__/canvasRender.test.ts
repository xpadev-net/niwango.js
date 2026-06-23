import { readFileSync } from "node:fs";

import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { config, initConfig } from "@/definition/config";
import { CanvasRender } from "@/render/canvas";

type MockCanvasContext = {
  clearRect: ReturnType<typeof vi.fn>;
  drawImage: ReturnType<typeof vi.fn>;
  restore: ReturnType<typeof vi.fn>;
  rotate: ReturnType<typeof vi.fn>;
  save: ReturnType<typeof vi.fn>;
  scale: ReturnType<typeof vi.fn>;
  translate: ReturnType<typeof vi.fn>;
};

const createMockContext = (): MockCanvasContext => ({
  clearRect: vi.fn(),
  drawImage: vi.fn(),
  restore: vi.fn(),
  rotate: vi.fn(),
  save: vi.fn(),
  scale: vi.fn(),
  translate: vi.fn(),
});

describe("CanvasRender target canvas size", () => {
  let contexts: MockCanvasContext[];
  let canvasContexts: Array<[HTMLCanvasElement, MockCanvasContext]>;

  const getContextFor = (canvas: HTMLCanvasElement) => {
    const context = canvasContexts.find(([element]) => element === canvas)?.[1];
    if (!context) throw new Error("missing mocked canvas context");
    return context;
  };

  const getOtherContext = (canvas: HTMLCanvasElement) => {
    const context = canvasContexts.find(([element]) => element !== canvas)?.[1];
    if (!context) throw new Error("missing second mocked canvas context");
    return context;
  };

  beforeEach(() => {
    initConfig();
    contexts = [];
    canvasContexts = [];
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
      function (this: HTMLCanvasElement) {
        const context = createMockContext();
        contexts.push(context);
        canvasContexts.push([this, context]);
        return context as unknown as CanvasRenderingContext2D;
      } as unknown as typeof HTMLCanvasElement.prototype.getContext,
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("initializes an unconfigured target canvas to the render size", () => {
    const targetCanvas = document.createElement("canvas");

    const render = new CanvasRender(targetCanvas);

    expect(targetCanvas.width).toBe(1920);
    expect(targetCanvas.height).toBe(1080);
    expect(getOtherContext(targetCanvas).scale).toHaveBeenCalledWith(
      1920 / config.canvasWidth,
      1080 / config.canvasHeight,
    );

    render.apply(true);

    expect(getContextFor(targetCanvas).clearRect).toHaveBeenCalledWith(
      0,
      0,
      1920,
      1080,
    );
    expect(getContextFor(targetCanvas).drawImage).toHaveBeenCalledWith(
      expect.any(HTMLCanvasElement),
      0,
      0,
      1920,
      1080,
      0,
      0,
      1920,
      1080,
    );
  });

  test("preserves an explicitly configured 16:9 target canvas", () => {
    const targetCanvas = document.createElement("canvas");
    targetCanvas.width = 640;
    targetCanvas.height = 360;

    const render = new CanvasRender(targetCanvas);

    expect(targetCanvas.width).toBe(640);
    expect(targetCanvas.height).toBe(360);

    render.apply(true);

    expect(getContextFor(targetCanvas).drawImage).toHaveBeenCalledWith(
      expect.any(HTMLCanvasElement),
      0,
      0,
      1920,
      1080,
      0,
      0,
      640,
      360,
    );
  });

  test("rejects an explicitly configured non-16:9 target canvas", () => {
    const targetCanvas = document.createElement("canvas");
    targetCanvas.setAttribute("width", "300");
    targetCanvas.setAttribute("height", "150");

    expect(() => new CanvasRender(targetCanvas)).toThrow(
      "CanvasRender target canvas must use a 16:9 intrinsic size. Received 300x150.",
    );
    expect(contexts).toHaveLength(0);
  });

  test("rejects an empty target canvas", () => {
    const targetCanvas = document.createElement("canvas");
    targetCanvas.setAttribute("width", "0");
    targetCanvas.setAttribute("height", "0");

    expect(() => new CanvasRender(targetCanvas)).toThrow(
      "CanvasRender target canvas must use a 16:9 intrinsic size. Received 0x0.",
    );
    expect(contexts).toHaveLength(0);
  });

  test("configures the playground canvas with 16:9 intrinsic dimensions", () => {
    const playground = readFileSync("docs/playground.html", "utf8");
    const document = new DOMParser().parseFromString(playground, "text/html");
    const canvas = document.querySelector("#render");
    if (!canvas) throw new Error("missing playground render canvas");

    const width = Number(canvas.getAttribute("width"));
    const height = Number(canvas.getAttribute("height"));

    expect(width).toBe(1920);
    expect(height).toBe(1080);
    expect(width * 9).toBe(height * 16);
  });
});
