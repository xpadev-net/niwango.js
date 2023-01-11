import { run } from "@/testUtils";

test("setSlot", () => {
  expect(run(`hoge={};hoge.setSlot("huga",256);return hoge.huga`)).toBe(256);
  expect(run(`hoge={};hoge.huga=256;return hoge.huga`)).toBe(256);
});

test("getSlot", () => {
  expect(run(`hoge={test:256};return hoge.getSlot("test")`)).toBe(256);
  expect(run(`hoge={test:256};return hoge.test`)).toBe(256);
});

test("clone", () => {
  expect(
    run(`hoge={test:256};huga=hoge.clone;huga.test=1024;return hoge.test`)
  ).toBe(256);
});
