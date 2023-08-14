import type {
  A_ANY,
  A_ArrayExpression,
  A_ArrowFunctionExpression,
  A_AssignmentExpression,
  A_BinaryExpression,
  A_BlockStatement,
  A_CallExpression,
  A_EmptyStatement,
  A_ExpressionStatement,
  A_Identifier,
  A_IfStatement,
  A_LambdaExpression,
  A_Literal,
  A_LogicalExpression,
  A_MemberExpression,
  A_ObjectExpression,
  A_Program,
  A_ReturnStatement,
  A_SequenceExpression,
  A_UnaryExpression,
  A_UpdateExpression,
  A_VariableDeclaration,
  definedFunction,
} from "@xpadev-net/niwango-core";

import { Comment } from "@/@types/comment";
import { IShapeLiteral } from "@/@types/IrShape";
import { ITextLiteral } from "@/@types/IrText";
import { IrObject } from "@/objects/object";

const typeGuard = {
  Literal: (i: unknown): i is A_Literal =>
    !!i && typeof i === "object" && (i as A_ANY).type === "Literal",
  Identifier: (i: unknown): i is A_Identifier =>
    !!i && typeof i === "object" && (i as A_ANY).type === "Identifier",
  ExpressionStatement: (i: unknown): i is A_ExpressionStatement =>
    !!i && typeof i === "object" && (i as A_ANY).type === "ExpressionStatement",
  AssignmentExpression: (i: unknown): i is A_AssignmentExpression =>
    !!i &&
    typeof i === "object" &&
    (i as A_ANY).type === "AssignmentExpression",
  ArrayExpression: (i: unknown): i is A_ArrayExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "ArrayExpression",
  ArrowFunctionExpression: (i: unknown): i is A_ArrowFunctionExpression =>
    !!i &&
    typeof i === "object" &&
    (i as A_ANY).type === "ArrowFunctionExpression",
  BinaryExpression: (i: unknown): i is A_BinaryExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "BinaryExpression",
  BlockStatement: (i: unknown): i is A_BlockStatement =>
    !!i && typeof i === "object" && (i as A_ANY).type === "BlockStatement",
  CallExpression: (i: unknown): i is A_CallExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "CallExpression",
  EmptyStatement: (i: unknown): i is A_EmptyStatement =>
    !!i && typeof i === "object" && (i as A_ANY).type === "EmptyStatement",
  IfStatement: (i: unknown): i is A_IfStatement =>
    !!i && typeof i === "object" && (i as A_ANY).type === "IfStatement",
  LogicalExpression: (i: unknown): i is A_LogicalExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "LogicalExpression",
  LambdaExpression: (i: unknown): i is A_LambdaExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "LambdaExpression",
  MemberExpression: (i: unknown): i is A_MemberExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "MemberExpression",
  ObjectExpression: (i: unknown): i is A_ObjectExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "ObjectExpression",
  Program: (i: unknown): i is A_Program =>
    !!i && typeof i === "object" && (i as A_ANY).type === "Program",
  ReturnStatement: (i: unknown): i is A_ReturnStatement =>
    !!i && typeof i === "object" && (i as A_ANY).type === "ReturnStatement",
  SequenceExpression: (i: unknown): i is A_SequenceExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "SequenceExpression",
  UnaryExpression: (i: unknown): i is A_UnaryExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "UnaryExpression",
  UpdateExpression: (i: unknown): i is A_UpdateExpression =>
    !!i && typeof i === "object" && (i as A_ANY).type === "UpdateExpression",
  VariableDeclaration: (i: unknown): i is A_VariableDeclaration =>
    !!i && typeof i === "object" && (i as A_ANY).type === "VariableDeclaration",
  definedFunction: (i: unknown): i is definedFunction =>
    !!i &&
    typeof i === "object" &&
    (i as definedFunction).type === "definedFunction",
  object: (i: unknown): i is { [key: string]: unknown } =>
    !!i && typeof i === "object",
  comment: (i: unknown): i is Comment =>
    objectVerify(i, [
      "message",
      "vpos",
      "isYourPost",
      "mail",
      "fromButton",
      "isPremium",
      "color",
      "size",
      "no",
      "_vpos",
      "_owner",
    ]),
  array: (i: unknown): i is unknown[] => Array.isArray(i),
  IrTextLiteral: (i: unknown): i is ITextLiteral =>
    typeof i === "object" &&
    !!i &&
    (i as ITextLiteral).__NIWANGO_LITERAL === "IrObject" &&
    (i as ITextLiteral).__type === "IrText" &&
    !(i instanceof IrObject),
  IrShapeLiteral: (i: unknown): i is IShapeLiteral =>
    typeof i === "object" &&
    !!i &&
    (i as IShapeLiteral).__NIWANGO_LITERAL === "IrObject" &&
    (i as IShapeLiteral).__type === "IrShape" &&
    !(i instanceof IrObject),
};

const objectVerify = (item: unknown, keys: string[]): boolean => {
  if (typeof item !== "object" || !item) {
    return false;
  }
  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(item, key)) {
      return false;
    }
  }
  return true;
};
export default typeGuard;
