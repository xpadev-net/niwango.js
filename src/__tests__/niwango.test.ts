import { run } from "@/testUtils";

test("variable declaration", () => {
  expect(run("i=0;return i")).toBe(0);
});
test("calculation declaration", () => {
  expect(run("return 1+1")).toBe(2);
  expect(run("return 1-1")).toBe(0);
  expect(run("return 2*2")).toBe(4);
  expect(run("return 8/2")).toBe(4);
  expect(run("return 2-4")).toBe(-2);
  expect(run("return 2*-4")).toBe(-8);
  expect(run("return 10/-4")).toBe(-2.5);
});
test("while_kari", () => {
  expect(run("i=0;while_kari(i<10,i++);return i")).toBe(10);
  expect(run("i=0;while_kari(i>-10,i--);return i")).toBe(-10);
});
test("times", () => {
  expect(run("i=0;10.times(i++);return i")).toBe(10);
  expect(run("i=0;1000.times(i++);return i")).toBe(1000);
});
test("rand", () => {
  const rand1 = run(`return rand("hoge")`);
  const rand2 = run(`return rand("hoge")`);
  expect(rand1 === rand2).toBe(true);
});
test("lambda", () => {
  expect(run(`i=0;lmd=\\(i+=@0);return lmd[10]`)).toBe(10);
});
test("sequence", () => {
  expect(run(`return 0,12,5`)).toBe(5);
  expect(run(`return "hoge","fuga","piyo"`)).toBe("piyo");
});

export {};
