import { A_AssignmentExpression, T_scope } from "@/@types/ast";
import { assign } from "@/context";
import { execute } from "@/core/coreContext";
import {
  Addition,
  BitwiseAND,
  BitwiseOR,
  BitwiseXOR,
  Division,
  Exponentiation,
  LeftShift,
  Multiplication,
  Remainder,
  RightShift,
  Subtraction,
  UnsignedRightShift,
} from "@/core/operators";
import { NotImplementedError } from "@/errors/NotImplementedError";

/**
 * 演算子と処理の対応表
 */
const processors = {
  "=": (_: unknown, right: unknown) => right,
  "+=": Addition,
  "-=": Subtraction,
  "*=": Multiplication,
  "/=": Division,
  "%=": Remainder,
  "**=": Exponentiation,
  "<<=": LeftShift,
  ">>=": RightShift,
  ">>>=": UnsignedRightShift,
  "&=": BitwiseAND,
  "^=": BitwiseXOR,
  "|=": BitwiseOR,
  "&&=": (left: unknown, right: unknown) => left && right,
  "||=": (left: unknown, right: unknown) => left || right,
  "??=": (left: unknown, right: unknown) => left ?? right,
} as const;

/**
 * 代入式を実行する
 * @param script
 * @param scopes
 */
const processAssignmentExpression = (
  script: A_AssignmentExpression,
  scopes: T_scope[]
): unknown => {
  const left = execute(script.left, scopes);
  const right = execute(script.right, scopes);
  const processor = processors[script.operator];
  if (!processor) throw new NotImplementedError(script, scopes);
  const result = processor(left, right);
  assign(script.left, result, scopes);
  return result;
};

export { processAssignmentExpression };
