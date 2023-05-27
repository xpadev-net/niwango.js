import { run } from "@/testUtils";

test("basic", () => {
  expect(
    run(
      `array = [["A","B"],["C",["D",["F"],"E"],"G"],"H","I"]; return array[1][1][1][0]`
    )
  ).toBe("F");
});

test("index", () => {
  expect(run(`return ["A","B","C"].index(2)`)).toBe("C");
  expect(run(`return ["A","B","C"][2]`)).toBe("C");
});

test("size", () => {
  expect(run(`return ["A","B","C"].size`)).toBe(3);
});

test("unshift", () => {
  expect(run(`array = ["A","B","C"];return array.unshift("D")`)).toBe(4);
  expect(
    run(
      `array = ["A","B","C"];array.unshift("D");return array.size + ":" + array[0]`
    )
  ).toBe("4:D");
});

test("push", () => {
  expect(run(`array = ["A","B","C"];return array.push("D")`)).toBe(4);
  expect(
    run(
      `array = ["A","B","C"];array.push("D");return array.size + ":" + array[array.size-1]`
    )
  ).toBe("4:D");
});

test("shift", () => {
  expect(run(`array = ["A","B","C"];return array.shift`)).toBe("A");
  expect(
    run(`array = ["A","B","C"];array.shift;return array.size + ":" + array[0]`)
  ).toBe("2:B");
});

test("pop", () => {
  expect(run(`array = ["A","B","C"];return array.pop`)).toBe("C");
  expect(
    run(
      `array = ["A","B","C"];array.pop;return array.size + ":" + array[array.size-1]`
    )
  ).toBe("2:B");
});

test("sort", () => {
  expect(run(`array = [2,1,3];array.sort;return array.join(',')`)).toBe(
    "1,2,3"
  );
});

test("sum", () => {
  expect(run("array = [10,8,12];return array.sum")).toBe(30);
});

test("product", () => {
  expect(run("array=[10,8,12];return array.product")).toBe(960);
});

test("join", () => {
  expect(run(`array=['A','B','C'];return array.join('-')`)).toBe("A-B-C");
});
