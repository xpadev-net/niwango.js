import { run } from "@/testUtils";

test("def", () => {
  expect(
    run(`def(hoge(target),('こんにちは'+ target));return hoge('世界')`)
  ).toBe("こんにちは世界");
  expect(
    run(
      `obj = ['ほげ'];obj.def(hoge, ('配列の中身は' + self[0]));return obj.hoge`
    )
  ).toBe("配列の中身はほげ");
  expect(
    run(
      `val = 'グローバル';def(hoge, val := 'ローカル';'val='+ val);return(hoge + 'val=' + val)`
    )
  ).toBe("val=ローカルval=グローバル");
});

test("def_kari", () => {
  expect(run(`def_kari('test','テスト');return test`)).toBe("テスト");
  expect(
    run(`def_kari('test',($2+txt+$1));return test('123',txt:'テスト','456')`)
  ).toBe("456テスト123");
});
