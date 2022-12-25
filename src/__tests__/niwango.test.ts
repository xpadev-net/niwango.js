import { run } from "@/__tests__/utils";

test("variable declaration", () => {
  expect(run("i=0;return i")).toBe(0);
});
test("variable declaration", () => {
  expect(run("i=0;i+=1;return i")).toBe(1);
});

export {};
