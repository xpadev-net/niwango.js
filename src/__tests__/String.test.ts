import { run } from "@/testUtils";

test("basic", () => {
  expect(run(`a = "ニコニコ動画"; b = "で遊ぼう"; c = a + b;return c`)).toBe(
    "ニコニコ動画で遊ぼう"
  );
});

test("index", () => {
  expect(run(`str='ニコニコ動画'; return str.index(4)`)).toBe("動");
  expect(run(`str='ニコニコ動画'; return str[4]`)).toBe("動");
});

test("size", () => {
  expect(run(`return "ニコニコ動画".size`)).toBe(6);
});

test("indexOf", () => {
  expect(run(`return 'abcdef'.indexOf('d')`)).toBe(3);
  expect(
    run(`t1='abcdef';t2='d';check=(t1.indexOf(t2)>=0); return check`)
  ).toBe(true);
});

test("slice", () => {
  expect(run(`return 'ABCDEF'.slice(2,2)`)).toBe("CD");
  expect(run(`return 'ABCDEF'.slice(-4)`)).toBe("CDEF");
});

test("toInteger", () => {
  expect(run(`return '0777'.toInteger`)).toBe(511);
  expect(run(`return '0.777'.toInteger`)).toBe(0);
  expect(run(`return 'aiueo'.toInteger`)).toBe(NaN);
});

test("toFloat", () => {
  expect(run(`return '2525.96'.toFloat`)).toBe(2525.96);
  expect(run(`return 'aiueo'.toFloat`)).toBe(NaN);
});
