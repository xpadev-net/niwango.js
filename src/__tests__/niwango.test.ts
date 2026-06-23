import { expect, test } from "vitest";

import type { Comment } from "@/@types/comment";
import Niwango from "@/main";
import { run } from "@/testUtils";

const createNiwango = () => {
  return new Niwango(document.createElement("div"), [] satisfies Comment[]);
};

test("rand", () => {
  const rand1 = run(`rand("hoge")`);
  const rand2 = run(`rand("hoge")`);
  const rand3 = run(`rand("huga")`);
  expect(rand1).toBe(rand2);
  expect(rand3).not.toBe(rand1);
});

test("draw rejects non-finite vpos values", () => {
  const niwango = createNiwango();

  expect(() => niwango.draw(Number.NaN)).toThrow(
    "Niwango.draw vpos must be a finite number.",
  );
  expect(() => niwango.draw(Number.POSITIVE_INFINITY)).toThrow(
    "Niwango.draw vpos must be a finite number.",
  );
  expect(() => niwango.draw(Number.NEGATIVE_INFINITY)).toThrow(
    "Niwango.draw vpos must be a finite number.",
  );
});

test("draw rejects negative vpos values", () => {
  const niwango = createNiwango();

  expect(() => niwango.draw(-1)).toThrow(
    "Niwango.draw vpos must be non-negative.",
  );
});

test("draw floors fractional vpos values", () => {
  const niwango = createNiwango();

  expect(niwango.draw(0.5)).toBe(true);
  expect(niwango.draw(0.9)).toBe(false);
  expect(niwango.draw(1.1)).toBe(true);
});

test("draw skips huge forward seek windows", () => {
  const niwango = createNiwango();

  expect(niwango.draw(100_001)).toBe(false);
  expect(niwango.draw(100_002)).toBe(true);
});

test("draw limits forward seeks from the current vpos", () => {
  const niwango = createNiwango();

  expect(niwango.draw(10)).toBe(true);
  expect(niwango.draw(100_011)).toBe(false);
  expect(niwango.draw(100_012)).toBe(true);
});
