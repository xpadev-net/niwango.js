import {
  Addition,
  BitwiseAND,
  BitwiseOR,
  BitwiseXOR,
  Division,
  Exponentiation,
  GreaterThan,
  GreaterThanOrEqual,
  LeftShift,
  LessThan,
  LessThanOrEqual,
  Multiplication,
  Remainder,
  RightShift,
  Subtraction,
  UnsignedRightShift,
} from "@/operators";
import { NotImplementedError } from "@/errors/NotImplementedError";
import { execute } from "@/context";

/**
 * 演算子と処理の対応表
 */
const processors = {
  ">=": GreaterThanOrEqual,
  "<=": LessThanOrEqual,
  ">": GreaterThan,
  "<": LessThan,
  "!=": (left: unknown, right: unknown) => left !== right,
  "!==": (left: unknown, right: unknown) => left !== right,
  "==": (left: unknown, right: unknown) => left === right,
  "===": (left: unknown, right: unknown) => left === right,
  "+": Addition,
  "-": Subtraction,
  "*": Multiplication,
  "/": Division,
  "%": Remainder,
  "**": Exponentiation,
  "&": BitwiseAND,
  "|": BitwiseOR,
  "^": BitwiseXOR,
  "<<": LeftShift,
  ">>": RightShift,
  ">>>": UnsignedRightShift,
} as const;

/**
 * 演算式を実行する
 * @param {A_BinaryExpression} script
 * @param {T_scope[]} scopes
 */
const processBinaryExpression = (script: A_BinaryExpression, scopes: T_scope[]) => {
  const left = execute(script.left, scopes);
  const right = execute(script.right, scopes);
  const processor = processors[script.operator];
  if (!processor) throw new NotImplementedError("BinaryExpression", script, scopes);
  return processor(left, right);
};

export { processBinaryExpression };
