import { execute } from "@/executor";
// @ts-ignore
import { parse } from "@/parser/parser";

test("variable declaration", () => {
  expect(run("i=0;return i")).toBe(0);
});
test("variable declaration", () => {
  expect(run("i=0;i+=1;return i")).toBe(1);
});

const run = (niwango: string) => {
  const globalScope = {
      Object: {},
    },
    environmentScope = {
      chat: undefined,
      commentColor: null, //0xffffff
      commentPlace: null, //naka
      commentSize: null, //medium
      commentInvisible: null, //false
      commentReverse: null, //0
      defaultSage: false, //false
      postDisabled: null, //false
      seekDisabled: null, //false
      isLoaded: true, //true
      isWide: null, //false
      lastVideo: "sm1", //sm1
    };
  const ast = (parse as T_parse)(niwango);
  const data = execute(ast, [globalScope, environmentScope]);
  console.log(data);
  return data;
};

export {};
