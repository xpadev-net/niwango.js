import { beforeEach, describe, expect, test, vi } from "vitest";

import type { IrObjectMoverQueue } from "@/@types/IrObject";
import { currentTime, setCurrentTime } from "@/context";
import { resetCanvas } from "@/contexts/canvas";
import { drawObjects, resetObjects } from "@/contexts/objectManager";
import {
  resetSnapshot,
  restoreSnapshot,
  saveSnapshot,
} from "@/contexts/snapshot";
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
  }) as unknown as CanvasRenderingContext2D;

const getMoverQueue = (object: unknown) =>
  (object as { moverQueue: IrObjectMoverQueue }).moverQueue;

describe("snapshot mover state", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(() =>
      createMockContext(),
    );
    initConfig();
    resetCanvas();
    resetObjects();
    resetSnapshot();
    setCurrentTime(0);
  });

  test("restores moving text without jumping to the target position", () => {
    const text = new IrText({
      __id: "moving-text",
      mover: "simple",
      text: "move",
      x: 0,
      y: 0,
    });
    text.x = 100;
    setCurrentTime(10);
    const snapshottedX = text.__x;
    saveSnapshot(10);

    setCurrentTime(50);
    restoreSnapshot(10);
    setCurrentTime(10);

    const restored = drawObjects[0];
    expect(restored).toBeInstanceOf(IrText);
    expect(restored?.__x).toBeCloseTo(snapshottedX);
    expect(restored?.__x).not.toBeCloseTo(text.__x + 60);
    expect(getMoverQueue(restored)).toEqual([
      {
        current: { x: 0, y: 0 },
        diff: { x: 100, y: 0 },
        duration: 25,
        target: { x: 100, y: 0 },
        vpos: 0,
      },
    ]);
  });

  test("restores moving shapes with their queued mover state", () => {
    const shape = new IrShape({
      __id: "moving-shape",
      mover: "simple",
      shape: "rect",
      width: 20,
      x: 0,
      y: 0,
    });
    shape.x = 100;
    setCurrentTime(10);
    const snapshottedX = shape.__x;
    saveSnapshot(10);

    setCurrentTime(50);
    restoreSnapshot(10);
    setCurrentTime(10);

    const restored = drawObjects[0];
    expect(restored).toBeInstanceOf(IrShape);
    expect(restored?.__x).toBeCloseTo(snapshottedX);
    expect(getMoverQueue(restored)).toHaveLength(1);
  });

  test("restores the current time captured with the snapshot", () => {
    setCurrentTime(900);
    saveSnapshot(1000);

    setCurrentTime(1050);
    restoreSnapshot(1000);

    expect(currentTime).toBe(900);
  });
});
