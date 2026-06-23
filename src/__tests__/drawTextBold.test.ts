import { afterEach, beforeEach, expect, test, vi } from "vitest";

import { resetCanvas } from "@/contexts/canvas";
import { initConfig } from "@/definition/config";
import { IrText } from "@/objects/text";
import { setup } from "@/utils/setup";
import { parseFont } from "@/utils/utils";

type RecordedCanvasCall = {
  method: "fillText" | "measureText";
  font: string;
  text: string;
};

const installCanvasMock = (records: RecordedCanvasCall[]) => {
  let currentFont = "";
  const context = {
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    fillRect: vi.fn(),
    fillText: vi.fn((text: string) => {
      records.push({ method: "fillText", font: currentFont, text });
    }),
    get font() {
      return currentFont;
    },
    lineJoin: "round",
    lineWidth: 4,
    measureText: vi.fn((text: string) => {
      records.push({ method: "measureText", font: currentFont, text });
      return { width: text.length * (currentFont.includes("bold") ? 11 : 10) };
    }),
    restore: vi.fn(),
    save: vi.fn(),
    scale: vi.fn(),
    set font(value: string) {
      currentFont = value;
    },
    strokeRect: vi.fn(),
    strokeStyle: "#000000",
    strokeText: vi.fn(),
    textAlign: "start",
    textBaseline: "alphabetic",
  } as unknown as CanvasRenderingContext2D;

  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(((
    contextId: string,
  ) => {
    if (contextId === "2d") return context;
    return null;
  }) as HTMLCanvasElement["getContext"]);
};

beforeEach(() => {
  initConfig();
  setup();
});

afterEach(() => {
  vi.restoreAllMocks();
  resetCanvas();
});

test("parseFont applies bold weight to default and flash font templates", () => {
  expect(parseFont("defont", 30, true)).toMatch(/^bold 30px /);
  expect(parseFont("defont", 30, false)).not.toMatch(/^bold 30px /);
  expect(parseFont("gulim", 30, true)).toContain("normal bold 30px");
  expect(parseFont("simsun", 30, true)).toContain("normal bold 30px");
});

test("IrText uses bold font weight for measurement and drawing", () => {
  const records: RecordedCanvasCall[] = [];
  installCanvasMock(records);

  new IrText({ text: "bold text", size: 30, bold: true });

  const measuredFont = records.find(
    ({ method }) => method === "measureText",
  )?.font;
  const drawnFont = records.find(({ method }) => method === "fillText")?.font;

  expect(measuredFont).toContain("bold 30px");
  expect(drawnFont).toContain("bold 30px");
});

test("IrText keeps normal font weight when bold is false", () => {
  const records: RecordedCanvasCall[] = [];
  installCanvasMock(records);

  new IrText({ text: "normal text", size: 30, bold: false });

  const measuredFont = records.find(
    ({ method }) => method === "measureText",
  )?.font;
  const drawnFont = records.find(({ method }) => method === "fillText")?.font;

  expect(measuredFont).not.toContain("bold 30px");
  expect(drawnFont).not.toContain("bold 30px");
});
