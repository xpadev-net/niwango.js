import { run } from "@/testUtils";

test("rand", () => {
  const rand1 = run(`return rand("hoge")`);
  const rand2 = run(`return rand("hoge")`);
  expect(rand1).toBe(rand2);
});
export {};
