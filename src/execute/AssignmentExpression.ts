import { Utils } from "@/@types/execute";
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
} from "@/operators";

const processAssignmentExpression = (
  script: A_AssignmentExpression,
  scopes: T_scope[],
  { execute, assign }: Utils,
): unknown => {
  const left = execute(script.left, scopes);
  const right = execute(script.right, scopes);
  const result = (() => {
    if (script.operator === "=") {
      return right;
    } else if (script.operator === "+=") {
      return Addition(left, right);
    } else if (script.operator === "-=") {
      return Subtraction(left, right);
    } else if (script.operator === "*=") {
      return Multiplication(left, right);
    } else if (script.operator === "/=") {
      return Division(left, right);
    } else if (script.operator === "%=") {
      return Remainder(left, right);
    } else if (script.operator === "**=") {
      return Exponentiation(left, right);
    } else if (script.operator === "<<=") {
      return LeftShift(left, right);
    } else if (script.operator === ">>=") {
      return RightShift(left, right);
    } else if (script.operator === ">>>=") {
      return UnsignedRightShift(left, right);
    } else if (script.operator === "&=") {
      return BitwiseAND(left, right);
    } else if (script.operator === "^=") {
      return BitwiseXOR(left, right);
    } else if (script.operator === "|=") {
      return BitwiseOR(left, right);
    } else if (script.operator === "&&=") {
      return left && right;
    } else if (script.operator === "||=") {
      return left || right;
    } else if (script.operator === "??=") {
      return left ?? right;
    }
  })();
  assign(script.left, result, scopes);
  return result;
};

export { processAssignmentExpression };
