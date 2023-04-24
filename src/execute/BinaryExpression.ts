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
import { Utils } from "@/@types/execute";
import { NotImplementedError } from "@/errors/NotImplementedError";

const processBinaryExpression = (script: A_BinaryExpression, scopes: T_scope[], { execute }: Utils) => {
  const left = execute(script.left, scopes);
  const right = execute(script.right, scopes);
  if (script.operator === ">=") {
    return GreaterThanOrEqual(left, right);
  } else if (script.operator === "<=") {
    return LessThanOrEqual(left, right);
  } else if (script.operator === ">") {
    return GreaterThan(left, right);
  } else if (script.operator === "<") {
    return LessThan(left, right);
  } else if (script.operator === "!=") {
    return left !== right;
  } else if (script.operator === "!==") {
    return left !== right;
  } else if (script.operator === "==") {
    return left === right;
  } else if (script.operator === "===") {
    return left === right;
  } else if (script.operator === "+") {
    return Addition(left, right);
  } else if (script.operator === "-") {
    return Subtraction(left, right);
  } else if (script.operator === "*") {
    return Multiplication(left, right);
  } else if (script.operator === "/") {
    return Division(left, right);
  } else if (script.operator === "%") {
    return Remainder(left, right);
  } else if (script.operator === "**") {
    return Exponentiation(left, right);
  } else if (script.operator === "&") {
    return BitwiseAND(left, right);
  } else if (script.operator === "|") {
    return BitwiseOR(left, right);
  } else if (script.operator === "^") {
    return BitwiseXOR(left, right);
  } else if (script.operator === "<<") {
    return LeftShift(left, right);
  } else if (script.operator === ">>") {
    return RightShift(left, right);
  } else if (script.operator === ">>>") {
    return UnsignedRightShift(left, right);
  } else {
    throw new NotImplementedError("BinaryExpression", script, scopes);
  }
};

export { processBinaryExpression };
