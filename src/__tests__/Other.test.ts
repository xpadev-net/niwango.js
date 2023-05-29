import { run } from "@/testUtils";

test("while_kari", () => {
  expect(run("i=0;while_kari(i<10,i++);return i")).toBe(10);
  expect(run("i=0;while_kari(i>-10,i--);return i")).toBe(-10);
});

test("alternative", () => {
  expect(run(`return (true).alt("hoge","huga")`)).toBe("hoge");
  expect(run(`return (false).alt("hoge","huga")`)).toBe("huga");
  expect(run(`return (true).alternative("hoge","huga")`)).toBe("hoge");
  expect(run(`return (false).alternative("hoge","huga")`)).toBe("huga");
});

test("if", () => {
  expect(run("if(when:true,then:i=0,else:i=1);return i")).toBe(0);
  expect(run("if(when:false,then:i=0,else:i=1);return i")).toBe(1);
  expect(run("if(true,i=0,i=1);return i")).toBe(0);
  expect(run("if(false,else:i=1);return i")).toBe(1);
  expect(run("if(true,i=0);return i")).toBe(0);
});
