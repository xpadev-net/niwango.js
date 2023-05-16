import {
  Addition,
  BitwiseAND,
  BitwiseNOT,
  BitwiseOR,
  BitwiseXOR,
  Compare,
  Division,
  Exponentiation,
  GreaterThan,
  GreaterThanOrEqual,
  LeftShift,
  LessThan,
  LessThanOrEqual,
  LogicalNot,
  Multiplication,
  Remainder,
  RightShift,
  Subtraction,
  UnaryNegation,
  UnaryPlus,
  UnsignedRightShift,
} from "@/operators";

test("Multiplication", () => {
  expect(Multiplication(3, 4)).toBe(12);
  expect(Multiplication(-3, 4)).toBe(-12);
  expect(Multiplication("3", 2)).toBe("33");
  expect(Multiplication(2, 2)).toBe(4);
  expect(Multiplication(-2, 2)).toBe(-4);
  expect(Multiplication(Infinity, 0)).toBe(NaN);
  expect(Multiplication(Infinity, Infinity)).toBe(Infinity);
  expect(Multiplication("foo", 2)).toBe("foofoo");
});

test("Subtraction", () => {
  expect(Subtraction(5, 3)).toBe(2);
  expect(Subtraction(3.5, 5)).toBe(-1.5);
  expect(Subtraction(5, "hello")).toBe(NaN);
  expect(Subtraction(5, true)).toBe(4);
  expect(Subtraction(3, 5)).toBe(-2);
});

test("Addition", () => {
  expect(Addition(2, 2)).toBe(4);
  expect(Addition(2, true)).toBe(3);
  expect(Addition("hello ", "everyone")).toBe("hello everyone");
  expect(Addition(2001, ": A Space Odyssey")).toBe("2001: A Space Odyssey");
  expect(Addition(1, 2)).toBe(3);
  expect(Addition(true, 1)).toBe(2);
  expect(Addition(false, false)).toBe(0);
  expect(Addition("foo", "bar")).toBe("foobar");
  expect(Addition(5, "foo")).toBe("5foo");
  expect(Addition("foo", false)).toBe("foofalse");
});

test("LessThan", () => {
  expect(LessThan(5, 3)).toBe(false);
  expect(LessThan(3, 3)).toBe(false);
  expect(LessThan("aa", "bb")).toBe(true);
  expect(LessThan("a", "b")).toBe(true);
  expect(LessThan("a", "a")).toBe(false);
  expect(LessThan("a", "3")).toBe(false);
  expect(LessThan("5", 3)).toBe(false);
  expect(LessThan("3", 3)).toBe(false);
  expect(LessThan("3", 5)).toBe(true);
  expect(LessThan("hello", 5)).toBe(false);
  expect(LessThan(5, "hello")).toBe(false);
  expect(LessThan(5, 3)).toBe(false);
  expect(LessThan(3, 3)).toBe(false);
  expect(LessThan(3, 5)).toBe(true);
  expect(LessThan(true, false)).toBe(false);
  expect(LessThan(false, true)).toBe(true);
  expect(LessThan(0, true)).toBe(true);
  expect(LessThan(true, 1)).toBe(false);
  expect(LessThan(null, 0)).toBe(false);
  expect(LessThan(null, 1)).toBe(true);
  expect(LessThan(undefined, 3)).toBe(false);
  expect(LessThan(3, undefined)).toBe(false);
  expect(LessThan(3, NaN)).toBe(false);
  expect(LessThan(NaN, 3)).toBe(false);
});

test("GreaterThan", () => {
  expect(GreaterThan(5, 3)).toBe(true);
  expect(GreaterThan(3, 3)).toBe(false);
  expect(GreaterThan("ab", "aa")).toBe(true);
  expect(GreaterThan("a", "b")).toBe(false);
  expect(GreaterThan("a", "a")).toBe(false);
  expect(GreaterThan("a", "3")).toBe(true);
  expect(GreaterThan("5", 3)).toBe(true);
  expect(GreaterThan("3", 3)).toBe(false);
  expect(GreaterThan("3", 5)).toBe(false);
  expect(GreaterThan("hello", 5)).toBe(false);
  expect(GreaterThan(5, "hello")).toBe(false);
  expect(GreaterThan(3, 5)).toBe(false);
  expect(GreaterThan(true, false)).toBe(true);
  expect(GreaterThan(false, true)).toBe(false);
  expect(GreaterThan(true, 0)).toBe(true);
  expect(GreaterThan(true, 1)).toBe(false);
  expect(GreaterThan(null, 0)).toBe(false);
  expect(GreaterThan(1, null)).toBe(true);
  expect(GreaterThan(undefined, 3)).toBe(false);
  expect(GreaterThan(3, undefined)).toBe(false);
  expect(GreaterThan(3, NaN)).toBe(false);
  expect(GreaterThan(NaN, 3)).toBe(false);
});

test("LessThanOrEqual", () => {
  expect(LessThanOrEqual(5, 3)).toBe(false);
  expect(LessThanOrEqual(3, 3)).toBe(true);
  expect(LessThanOrEqual("aa", "ab")).toBe(true);
  expect(LessThanOrEqual("a", "b")).toBe(true);
  expect(LessThanOrEqual("a", "a")).toBe(true);
  expect(LessThanOrEqual("a", "3")).toBe(false);
  expect(LessThanOrEqual("5", 3)).toBe(false);
  expect(LessThanOrEqual("3", 3)).toBe(true);
  expect(LessThanOrEqual("3", 5)).toBe(true);
  expect(LessThanOrEqual("hello", 5)).toBe(false);
  expect(LessThanOrEqual(5, "hello")).toBe(false);
  expect(LessThanOrEqual(5, 3)).toBe(false);
  expect(LessThanOrEqual(3, 3)).toBe(true);
  expect(LessThanOrEqual(3, 5)).toBe(true);
  expect(LessThanOrEqual(true, false)).toBe(false);
  expect(LessThanOrEqual(true, true)).toBe(true);
  expect(LessThanOrEqual(false, true)).toBe(true);
  expect(LessThanOrEqual(true, 0)).toBe(false);
  expect(LessThanOrEqual(true, 1)).toBe(true);
  expect(LessThanOrEqual(null, 0)).toBe(true);
  expect(LessThanOrEqual(1, null)).toBe(false);
  expect(LessThanOrEqual(undefined, 3)).toBe(false);
  expect(LessThanOrEqual(3, undefined)).toBe(false);
  expect(LessThanOrEqual(3, NaN)).toBe(false);
  expect(LessThanOrEqual(NaN, 3)).toBe(false);
});

test("GreaterThanOrEqual", () => {
  expect(GreaterThanOrEqual(5, 3)).toBe(true);
  expect(GreaterThanOrEqual(3, 3)).toBe(true);
  expect(GreaterThanOrEqual("ab", "aa")).toBe(true);
  expect(GreaterThanOrEqual("a", "b")).toBe(false);
  expect(GreaterThanOrEqual("a", "a")).toBe(true);
  expect(GreaterThanOrEqual("a", "3")).toBe(true);
  expect(GreaterThanOrEqual("5", 3)).toBe(true);
  expect(GreaterThanOrEqual("3", 3)).toBe(true);
  expect(GreaterThanOrEqual("3", 5)).toBe(false);
  expect(GreaterThanOrEqual("hello", 5)).toBe(false);
  expect(GreaterThanOrEqual(5, "hello")).toBe(false);
  expect(GreaterThanOrEqual(5, 3)).toBe(true);
  expect(GreaterThanOrEqual(3, 3)).toBe(true);
  expect(GreaterThanOrEqual(3, 5)).toBe(false);
  expect(GreaterThanOrEqual(true, false)).toBe(true);
  expect(GreaterThanOrEqual(true, false)).toBe(true);
  expect(GreaterThanOrEqual(false, true)).toBe(false);
  expect(GreaterThanOrEqual(true, 0)).toBe(true);
  expect(GreaterThanOrEqual(true, 1)).toBe(true);
  expect(GreaterThanOrEqual(null, 0)).toBe(true);
  expect(GreaterThanOrEqual(1, null)).toBe(true);
  expect(GreaterThanOrEqual(undefined, 3)).toBe(false);
  expect(GreaterThanOrEqual(3, undefined)).toBe(false);
  expect(GreaterThanOrEqual(3, NaN)).toBe(false);
  expect(GreaterThanOrEqual(NaN, 3)).toBe(false);
});

test("Division", () => {
  expect(Division(12, 2)).toBe(6);
  expect(Division(3, 2)).toBe(1.5);
  expect(Division(6, "3")).toBe(2);
  expect(Division(2, 0)).toBe(Infinity);
  expect(Division(1, 2)).toBe(0.5);
  expect(Math.floor(Division(3, 2))).toBe(1);
  expect(Division(1.0, 2.0)).toBe(0.5);
  expect(Division(2.0, 0)).toBe(Infinity);
  expect(Division(2.0, 0.0)).toBe(Infinity);
  expect(Division(2.0, -0.0)).toBe(-Infinity);
});

test("Remainder", () => {
  expect(Remainder(13, 5)).toBe(3);
  expect(Remainder(-13, 5)).toBe(-3);
  expect(Remainder(4, 2)).toBe(0);
  expect(Remainder(-4, 2)).toBe(-0);
  expect(Remainder(12, 5)).toBe(2);
  expect(Remainder(1, -2)).toBe(1);
  expect(Remainder(1, 2)).toBe(1);
  expect(Remainder(2, 3)).toBe(2);
  expect(Remainder(5.5, 2)).toBe(1.5);
  expect(Remainder(-12, 5)).toBe(-2);
  expect(Remainder(-1, 2)).toBe(-1);
  expect(Remainder(-4, 2)).toBe(-0);
  expect(Remainder(NaN, 2)).toBe(NaN);
  expect(Remainder(Infinity, 2)).toBe(NaN);
  expect(Remainder(Infinity, 0)).toBe(NaN);
  expect(Remainder(Infinity, Infinity)).toBe(NaN);
});

test("Exponentiation", () => {
  expect(Exponentiation(3, 4)).toBe(81);
  expect(Exponentiation(10, -2)).toBe(0.01);
  expect(Exponentiation(2, 3)).toBe(8);
  expect(Exponentiation(3, 2)).toBe(9);
  expect(Exponentiation(3, 2.5)).toBe(15.588457268119896);
  expect(Exponentiation(10, -1)).toBe(0.1);
  expect(Exponentiation(NaN, 2)).toBe(NaN);
  expect(Exponentiation(-2, 2)).toBe(4);
});

test("BitwiseAND", () => {
  expect(BitwiseAND(5, 3)).toBe(1);
  expect(BitwiseAND(14, 9)).toBe(8);
  expect(BitwiseAND(5, 2)).toBe(0);
});

test("BitwiseOR", () => {
  expect(BitwiseOR(5, 3)).toBe(7);
  expect(BitwiseOR(14, 9)).toBe(15);
});

test("BitwiseXOR", () => {
  expect(BitwiseXOR(5, 3)).toBe(6);
  expect(BitwiseXOR(14, 9)).toBe(7);
});

test("BitwiseNOT", () => {
  expect(BitwiseNOT(5)).toBe(-6);
  expect(BitwiseNOT(-3)).toBe(2);
  expect(BitwiseNOT(9)).toBe(-10);
  expect(BitwiseNOT(0)).toBe(-1);
  expect(BitwiseNOT(-1)).toBe(0);
  expect(BitwiseNOT(1)).toBe(-2);
});

test("LeftShift", () => {
  expect(LeftShift(5, 2)).toBe(20);
  expect(LeftShift(9, 2)).toBe(36);
  expect(LeftShift(9, 3)).toBe(72);
});

test("RightShift", () => {
  expect(RightShift(5, 2)).toBe(1);
  expect(RightShift(-5, 2)).toBe(-2);
  expect(RightShift(9, 2)).toBe(2);
  expect(RightShift(-9, 2)).toBe(-3);
});

test("UnsignedRightShift", () => {
  expect(UnsignedRightShift(5, 2)).toBe(1);
  expect(UnsignedRightShift(-5, 2)).toBe(1073741822);
  expect(UnsignedRightShift(9, 2)).toBe(2);
  expect(UnsignedRightShift(-9, 2)).toBe(1073741821);
});

test("UnaryNegation", () => {
  expect(UnaryNegation(3)).toBe(-3);
  expect(UnaryNegation("4")).toBe(-4);
  expect(UnaryNegation(-1)).toBe(1);
});

test("UnaryPlus", () => {
  expect(UnaryPlus(1)).toBe(1);
  expect(UnaryPlus(-1)).toBe(-1);
  expect(UnaryPlus("")).toBe(0);
  expect(UnaryPlus(true)).toBe(1);
  expect(UnaryPlus(false)).toBe(0);
  expect(UnaryPlus("hello")).toBe(NaN);
});

test("LogicalNot", () => {
  expect(LogicalNot(true)).toBe(false);
  expect(LogicalNot(false)).toBe(true);
  expect(LogicalNot("")).toBe(true);
  expect(LogicalNot("Cat")).toBe(false);
  expect(LogicalNot({})).toBe(false);
  expect(LogicalNot(new Boolean(false))).toBe(false);
});

test("Compare", () => {
  expect(Compare(1, 2)).toBe(-1);
  expect(Compare(2, 1)).toBe(1);
  expect(Compare(1, 1)).toBe(0);
});
