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
import { NotImplementedError } from "@/errors/NotImplementedError";
import { assign, execute } from "@/context";

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

const processAssignmentExpression = (script: A_AssignmentExpression, scopes: T_scope[]): unknown => {
  const left = execute(script.left, scopes);
  const right = execute(script.right, scopes);
  const processor = processors[script.operator];
  if (!processor) throw new NotImplementedError("AssignmentExpression", script, scopes);
  const result = processor(left, right);
  assign(script.left, result, scopes);
  return result;
};

export { processAssignmentExpression };
