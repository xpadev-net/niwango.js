import { run } from "@/testUtils";

test("floor", () => {
  expect(run("return 3.14.floor")).toBe(3);
  expect(run("return 10.floor")).toBe(10);
});

test("sin", () => {
  expect(run("return 3.sin")).toBe(Math.sin(3));
  expect(run("return 10.sin")).toBe(Math.sin(10));
});

test("cos", () => {
  expect(run("return 3.cos")).toBe(Math.cos(3));
  expect(run("return 10.cos")).toBe(Math.cos(10));
});

test("pow", () => {
  expect(run("return 2.pow(10)")).toBe(1024);
  expect(run("return 3.pow(4)")).toBe(81);
});

test("abs", () => {
  expect(run("return (-10).abs")).toBe(10);
  expect(run("return 10.abs")).toBe(10);
});
