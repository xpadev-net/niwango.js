import Core, {
  type A_CallExpression,
  type A_Program,
} from "@xpadev-net/niwango-core";
import { afterEach, describe, expect, test, vi } from "vitest";

import { initConfig } from "@/definition/config";
import { processDrawShape } from "@/functions/drawShape";
import { IrShape } from "@/objects/shape";
import { setup } from "@/utils/setup";

const parseCallExpression = (niwango: string) => {
  setup();
  const ast = Core.parseScript(niwango, "test.niwascript") as A_Program;
  const statement = ast.body[0] as { expression: A_CallExpression } | undefined;
  if (!statement) throw new Error("missing parsed statement");
  return statement.expression;
};

const mockCanvasContext = () =>
  ({
    beginPath: vi.fn(),
    clearRect: vi.fn(),
    ellipse: vi.fn(),
    fill: vi.fn(),
    fillRect: vi.fn(),
  }) as unknown as CanvasRenderingContext2D;

describe("IrShape mask option", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("rejects unsupported mask shapes explicitly", () => {
    expect(() => new IrShape({ mask: true })).toThrow(
      "drawShape mask option is not supported",
    );
  });

  test("rejects enabling mask after shape creation", () => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(() =>
      mockCanvasContext(),
    );
    initConfig();
    setup();
    const shape = new IrShape({ mask: false });

    expect(() => {
      shape.mask = true;
    }).toThrow("drawShape mask option is not supported");
  });

  test("rejects drawShape calls with mask enabled", () => {
    const script = parseCallExpression(
      'drawShape(0, 0, 0, "rect", 10, 10, "naka", 16777215, true)',
    );

    expect(() =>
      processDrawShape(script, [{}, {}, Core.prototypeScope], {}, [script]),
    ).toThrow("drawShape mask option is not supported");
  });
});
