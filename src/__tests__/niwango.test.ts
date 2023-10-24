import { run } from "@/testUtils";

test("rand", () => {
  const rand1 = run(`rand("hoge")`);
  const rand2 = run(`rand("hoge")`);
  const rand3 = run(`rand("huga")`);
  expect(rand1).toBe(rand2);
  expect(rand3).not.toBe(rand1);
});
export {};
