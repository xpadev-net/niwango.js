import { describe, expect, test } from "vitest";

import type { Comment } from "@/@types/comment";
import { comments } from "@/context";
import Niwango from "@/main";
import { run } from "@/testUtils";

type CommentBoundary = (commentInputs: unknown[]) => void;

const createComment = (overrides: Partial<Comment> = {}): Comment => ({
  message: "hello",
  vpos: 0,
  isYourPost: false,
  mail: "",
  fromButton: false,
  isPremium: false,
  color: 0xffffff,
  size: 25,
  no: 1,
  _vpos: 0,
  _owner: false,
  ...overrides,
});

const createNiwango = () => {
  return new Niwango(document.createElement("div"), [] satisfies Comment[]);
};

const useConstructorBoundary: CommentBoundary = (commentInputs) => {
  new Niwango(document.createElement("div"), commentInputs as Comment[]);
};

const useAddCommentsBoundary: CommentBoundary = (commentInputs) => {
  const niwango = createNiwango();
  niwango.addComments(...(commentInputs as Comment[]));
};

const expectBoundaryToSkipOnlyInvalid = (
  useBoundary: CommentBoundary,
  invalidInputs: unknown[],
) => {
  const validComment = createComment({ no: 99, _vpos: 1, vpos: 1 });

  expect(() => useBoundary([validComment, ...invalidInputs])).not.toThrow();
  expect(comments).toEqual([validComment]);
  expect(comments[0]).toBe(validComment);
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

test("constructor treats non-array comments input as empty", () => {
  expect(
    () =>
      new Niwango(document.createElement("div"), null as unknown as Comment[]),
  ).not.toThrow();
  expect(comments).toEqual([]);
});

describe.each([
  ["constructor", useConstructorBoundary],
  ["addComments", useAddCommentsBoundary],
])("%s comment input validation", (_boundaryName, useBoundary) => {
  test("skips invalid messages and falsy objects", () => {
    expectBoundaryToSkipOnlyInvalid(useBoundary, [
      null,
      undefined,
      false,
      0,
      "",
      [],
      { ...createComment(), message: 1 },
      { ...createComment(), message: null },
      { ...createComment(), mail: 1 },
      { ...createComment(), mail: null },
    ]);
  });

  test("skips comments with non-finite numeric fields", () => {
    expectBoundaryToSkipOnlyInvalid(useBoundary, [
      { ...createComment(), vpos: Number.NaN },
      { ...createComment(), color: Number.POSITIVE_INFINITY },
      { ...createComment(), size: Number.NEGATIVE_INFINITY },
      { ...createComment(), no: Number.NaN },
      { ...createComment(), _vpos: Number.POSITIVE_INFINITY },
    ]);
  });

  test("skips comments with invalid boolean flags", () => {
    expectBoundaryToSkipOnlyInvalid(useBoundary, [
      { ...createComment(), isYourPost: 0 },
      { ...createComment(), fromButton: "false" },
      { ...createComment(), isPremium: null },
      { ...createComment(), _owner: 1 },
    ]);
  });
});
