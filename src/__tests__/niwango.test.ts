import type { A_ANY } from "@xpadev-net/niwango-core";
import Core from "@xpadev-net/niwango-core";
import { afterEach, describe, expect, test, vi } from "vitest";
import type { Comment } from "@/@types/comment";
import { comments, currentTime } from "@/context";
import { addHandler } from "@/contexts/commentHandler";
import { addQueue } from "@/contexts/queue";
import { environmentScope, globalScope } from "@/contexts/scope";
import Niwango from "@/main";
import { run } from "@/testUtils";

type CommentBoundary = (commentInputs: unknown[]) => void;

const targetElementTypeError =
  "Niwango constructor targetElement must be an HTMLDivElement or HTMLCanvasElement.";

const createMockCanvasContext = () =>
  ({
    clearRect: vi.fn(),
    drawImage: vi.fn(),
    restore: vi.fn(),
    rotate: vi.fn(),
    save: vi.fn(),
    scale: vi.fn(),
    translate: vi.fn(),
  }) as unknown as CanvasRenderingContext2D;

const createIframeWindow = () => {
  const iframe = document.createElement("iframe");
  document.body.append(iframe);
  const iframeWindow = iframe.contentWindow as
    | (Window & typeof globalThis)
    | null;
  if (!iframeWindow) {
    iframe.remove();
    throw new Error("missing iframe window");
  }
  return { iframe, iframeWindow };
};

const createElementWithSpoofedPrototype = (
  localName: string,
  prototype: object,
) => {
  const targetElement = document.createElement(localName);
  Object.setPrototypeOf(targetElement, prototype);
  return targetElement;
};

const createElementWithSpoofedLocalNameAndPrototype = (
  localName: string,
  spoofedLocalName: string,
  prototype: object,
) => {
  const targetElement = createElementWithSpoofedPrototype(localName, prototype);
  Object.defineProperty(targetElement, "localName", {
    value: spoofedLocalName,
  });
  return targetElement;
};

const createElementWithSpoofedOwnerDocumentLocalNameAndPrototype = (
  localName: string,
  spoofedLocalName: string,
  prototype: object,
) => {
  const targetElement = createElementWithSpoofedLocalNameAndPrototype(
    localName,
    spoofedLocalName,
    prototype,
  );
  Object.defineProperty(targetElement, "ownerDocument", {
    value: {
      defaultView: {
        Element: Object,
        HTMLDivElement: {
          [Symbol.hasInstance]: () => true,
        },
      },
    },
  });
  return targetElement;
};

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

afterEach(() => {
  vi.restoreAllMocks();
});

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

test("draw returns false and does not replay same-vpos work", () => {
  const handlerScript: A_ANY = { type: "Raw", value: "handler" };
  const handlerScopes = [{}, {}, Core.prototypeScope];
  const execute = vi.spyOn(Core, "execute").mockReturnValue(undefined);
  const niwango = new Niwango(document.createElement("div"), [
    createComment({ no: 1, message: "same-vpos", _vpos: 10, vpos: 10 }),
  ]);
  addHandler(handlerScript, handlerScopes, [], 0);

  expect(niwango.draw(10)).toBe(true);
  expect(execute).toHaveBeenCalledTimes(1);

  expect(niwango.draw(10)).toBe(false);
  expect(execute).toHaveBeenCalledTimes(1);
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

test("constructor reports owner script parse failures through onError", () => {
  const parseError = new Error("parse failed");
  const onError = vi.fn();
  const parseComment = createComment({
    no: 10,
    message: "/broken()",
    _owner: true,
  });
  vi.spyOn(console, "error").mockImplementation(() => undefined);
  vi.spyOn(Core, "parseScript").mockImplementation(() => {
    throw parseError;
  });

  expect(
    () =>
      new Niwango(document.createElement("div"), [parseComment], { onError }),
  ).not.toThrow();

  expect(onError).toHaveBeenCalledOnce();
  expect(onError).toHaveBeenCalledWith({
    phase: "parse",
    error: parseError,
    comment: parseComment,
  });
  expect(console.error).not.toHaveBeenCalled();
});

test("draw reports owner script execute failures through onError", () => {
  const executeError = new Error("execute failed");
  const onError = vi.fn();
  const ownerScript: A_ANY = { type: "Raw", value: "owner" };
  vi.spyOn(console, "error").mockImplementation(() => undefined);
  vi.spyOn(Core, "parseScript").mockReturnValue(ownerScript);
  vi.spyOn(Core, "execute").mockImplementation(() => {
    throw executeError;
  });
  const niwango = new Niwango(
    document.createElement("div"),
    [createComment({ message: "/owner()", _owner: true })],
    { onError },
  );

  expect(niwango.draw(0)).toBe(true);

  expect(onError).toHaveBeenCalledOnce();
  expect(onError).toHaveBeenCalledWith({
    phase: "execute",
    error: executeError,
    source: "script",
    vpos: 0,
  });
  expect(console.error).not.toHaveBeenCalled();
});

test("draw reports queued timer execute failures through onError", () => {
  const executeError = new Error("queued execute failed");
  const onError = vi.fn();
  const schedulerScript: A_ANY = { type: "Raw", value: "scheduler" };
  const queuedScript: A_ANY = { type: "Raw", value: "queued" };
  vi.spyOn(console, "error").mockImplementation(() => undefined);
  vi.spyOn(Core, "parseScript").mockReturnValue(schedulerScript);
  vi.spyOn(Core, "execute").mockImplementation((script, scopes, trace) => {
    if (script === queuedScript) {
      throw executeError;
    }
    addQueue(queuedScript, 0, scopes, trace);
    return undefined;
  });
  const niwango = new Niwango(
    document.createElement("div"),
    [createComment({ message: "/timer(0, lambda(fail()))", _owner: true })],
    { onError },
  );

  expect(niwango.draw(1)).toBe(true);

  expect(onError).toHaveBeenCalledOnce();
  expect(onError).toHaveBeenCalledWith({
    phase: "execute",
    error: executeError,
    source: "queue",
    vpos: 0,
  });
  expect(console.error).not.toHaveBeenCalled();
});

test("draw reports comment handler execute failures through onError", () => {
  const executeError = new Error("handler execute failed");
  const onError = vi.fn();
  const handlerScript: A_ANY = { type: "Raw", value: "handler" };
  const handlerScopes = [{}, {}, Core.prototypeScope];
  vi.spyOn(console, "error").mockImplementation(() => undefined);
  vi.spyOn(Core, "execute").mockImplementation(() => {
    throw executeError;
  });
  const niwango = new Niwango(
    document.createElement("div"),
    [createComment({ message: "trigger", _vpos: 10, vpos: 10 })],
    { onError },
  );
  addHandler(handlerScript, handlerScopes, [], 0);

  expect(niwango.draw(10)).toBe(true);

  expect(onError).toHaveBeenCalledOnce();
  expect(onError).toHaveBeenCalledWith({
    phase: "execute",
    error: executeError,
    source: "commentHandler",
    vpos: 10,
  });
  expect(console.error).toHaveBeenCalledOnce();
  expect(console.error).toHaveBeenCalledWith(executeError);
});

test("draw treats small rewinds under 100 vpos as a no-op draw", () => {
  const handlerScript: A_ANY = { type: "Raw", value: "handler" };
  const handlerScopes = [{}, {}, Core.prototypeScope];
  const execute = vi.spyOn(Core, "execute").mockReturnValue(undefined);
  const niwango = new Niwango(document.createElement("div"), [
    createComment({ no: 1, message: "forward", _vpos: 150, vpos: 150 }),
    createComment({ no: 2, message: "small rewind", _vpos: 175, vpos: 175 }),
  ]);
  addHandler(handlerScript, handlerScopes, [], 0);

  expect(niwango.draw(200)).toBe(true);
  expect(execute).toHaveBeenCalledTimes(2);

  expect(niwango.draw(150)).toBe(true);
  expect(execute).toHaveBeenCalledTimes(2);
  expect(currentTime).toBe(175);
});

test("draw restores processed comment time when rewinding to a snapshot", () => {
  const handlerScript: A_ANY = { type: "Raw", value: "handler" };
  const handlerScopes = [{}, {}, {}];
  const execute = vi.spyOn(Core, "execute").mockReturnValue(undefined);
  const niwango = new Niwango(document.createElement("div"), [
    createComment({ no: 1, message: "before snapshot", _vpos: 900 }),
    createComment({ no: 2, message: "after snapshot", _vpos: 1050 }),
  ]);
  addHandler(handlerScript, handlerScopes, [], 0);

  expect(niwango.draw(1500)).toBe(true);
  expect(execute).toHaveBeenCalledTimes(2);
  expect(currentTime).toBe(1050);

  expect(niwango.draw(1050)).toBe(true);

  expect(execute).toHaveBeenCalledTimes(3);
  expect(execute).toHaveBeenLastCalledWith(handlerScript, handlerScopes, [
    handlerScript,
  ]);
  const replayedScopes = execute.mock.calls[2]?.[1];
  expect(replayedScopes).not.toBe(handlerScopes);
  expect(replayedScopes?.[0]).toMatchObject({
    chat: expect.objectContaining({ message: "after snapshot", _vpos: 1050 }),
  });
  expect(currentTime).toBe(1050);
});

test.each([
  ["past", 5],
  ["same", 10],
])("addComments ignores %s-vpos additions that playback has already reached", (_name, commentVpos) => {
  const handlerScript: A_ANY = { type: "Raw", value: "handler" };
  const ownerScript: A_ANY = { type: "Raw", value: "owner" };
  const handlerScopes = [{}, {}, Core.prototypeScope];
  const execute = vi.spyOn(Core, "execute").mockReturnValue(undefined);
  vi.spyOn(Core, "parseScript").mockReturnValue(ownerScript);
  const niwango = createNiwango();

  addHandler(handlerScript, handlerScopes, [], 0);
  expect(niwango.draw(10)).toBe(true);

  niwango.addComments(
    createComment({
      no: 2,
      message: "already reached",
      _vpos: commentVpos,
      vpos: commentVpos,
    }),
    createComment({
      no: 3,
      message: "/alreadyReached()",
      _owner: true,
      _vpos: commentVpos,
      vpos: commentVpos,
    }),
  );

  expect(niwango.draw(11)).toBe(true);
  expect(execute).not.toHaveBeenCalled();
});

test("addComments dispatches future-vpos additions when playback reaches them", () => {
  const handlerScript: A_ANY = { type: "Raw", value: "handler" };
  const ownerScript: A_ANY = { type: "Raw", value: "owner" };
  const handlerScopes = [{}, {}, Core.prototypeScope];
  const execute = vi.spyOn(Core, "execute").mockReturnValue(undefined);
  vi.spyOn(Core, "parseScript").mockReturnValue(ownerScript);
  const niwango = createNiwango();

  addHandler(handlerScript, handlerScopes, [], 0);
  expect(niwango.draw(10)).toBe(true);

  niwango.addComments(
    createComment({ no: 2, message: "future", _vpos: 11, vpos: 11 }),
    createComment({
      no: 3,
      message: "/future()",
      _owner: true,
      _vpos: 11,
      vpos: 11,
    }),
  );

  expect(niwango.draw(11)).toBe(true);
  expect(execute).toHaveBeenCalledTimes(2);
  expect(execute).toHaveBeenNthCalledWith(
    1,
    expect.objectContaining(ownerScript),
    [globalScope, environmentScope, Core.prototypeScope],
    [expect.objectContaining(ownerScript)],
  );
  expect(execute).toHaveBeenNthCalledWith(2, handlerScript, handlerScopes, [
    handlerScript,
  ]);
  expect(handlerScopes[0]).toMatchObject({
    chat: expect.objectContaining({ message: "future", _vpos: 11 }),
  });
});

test("constructor treats non-array comments input as empty", () => {
  expect(
    () =>
      new Niwango(document.createElement("div"), null as unknown as Comment[]),
  ).not.toThrow();
  expect(comments).toEqual([]);
});

test("constructor accepts div target elements", () => {
  expect(
    () => new Niwango(document.createElement("div"), [] satisfies Comment[]),
  ).not.toThrow();
});

test("constructor accepts canvas target elements", () => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    createMockCanvasContext(),
  );

  expect(
    () => new Niwango(document.createElement("canvas"), [] satisfies Comment[]),
  ).not.toThrow();
});

test("constructor accepts div target elements from another DOM realm", () => {
  const { iframe, iframeWindow } = createIframeWindow();
  try {
    expect(
      () =>
        new Niwango(
          iframeWindow.document.createElement("div"),
          [] satisfies Comment[],
        ),
    ).not.toThrow();
  } finally {
    iframe.remove();
  }
});

test("constructor accepts canvas target elements from another DOM realm", () => {
  const { iframe, iframeWindow } = createIframeWindow();
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    createMockCanvasContext(),
  );
  vi.spyOn(
    iframeWindow.HTMLCanvasElement.prototype,
    "getContext",
  ).mockReturnValue(createMockCanvasContext());

  try {
    expect(
      () =>
        new Niwango(
          iframeWindow.document.createElement("canvas"),
          [] satisfies Comment[],
        ),
    ).not.toThrow();
  } finally {
    iframe.remove();
  }
});

test.each([
  ["span", document.createElement("span")],
  ["null", null],
  ["undefined", undefined],
  ["plain object", {}],
  ["object with canvas-like nodeName", { nodeName: "CANVAS" }],
  ["object with div prototype", Object.create(HTMLDivElement.prototype)],
  ["object with canvas prototype", Object.create(HTMLCanvasElement.prototype)],
  [
    "span element with div prototype",
    createElementWithSpoofedPrototype("span", HTMLDivElement.prototype),
  ],
  [
    "span element with spoofed localName and div prototype",
    createElementWithSpoofedLocalNameAndPrototype(
      "span",
      "div",
      HTMLDivElement.prototype,
    ),
  ],
  [
    "span element with spoofed ownerDocument, localName, and div prototype",
    createElementWithSpoofedOwnerDocumentLocalNameAndPrototype(
      "span",
      "div",
      HTMLDivElement.prototype,
    ),
  ],
  [
    "object with spoofed ownerDocument",
    {
      ownerDocument: {
        defaultView: {
          Element: Object,
          HTMLDivElement: Object,
        },
      },
    },
  ],
])("constructor rejects unsupported target: %s", (_name, targetElement) => {
  expect(
    () =>
      new Niwango(
        targetElement as HTMLCanvasElement | HTMLDivElement,
        [] satisfies Comment[],
      ),
  ).toThrow(TypeError);
  expect(
    () =>
      new Niwango(
        targetElement as HTMLCanvasElement | HTMLDivElement,
        [] satisfies Comment[],
      ),
  ).toThrow(targetElementTypeError);
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
