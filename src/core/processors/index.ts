import { processAssignmentExpression } from "@/core/processors/AssignmentExpression";
import { processArrayExpression } from "@/core/processors/ArrayExpression";
import { processArrowFunctionExpression } from "@/core/processors/ArrowFunctionExpression";
import { processBinaryExpression } from "@/core/processors/BinaryExpression";
import { processBlockStatement } from "@/core/processors/BlockStatement";
import { processIdentifier } from "@/core/processors/Identifier";
import { processLogicalExpression } from "@/core/processors/LogicalExpression";
import { processMemberExpression } from "@/core/processors/MemberExpression";
import { processObjectExpression } from "@/core/processors/ObjectExpression";
import { processProgram } from "@/core/processors/Program";
import { processSequenceExpression } from "@/core/processors/SequenceExpression";
import { processUnaryExpression } from "@/core/processors/UnaryExpression";
import { processUpdateExpression } from "@/core/processors/UpdateExpression";
import { processVariableDeclaration } from "@/core/processors/VariableDeclaration";
import { processReturnStatement } from "@/core/processors/ReturnStatement";
import { processLiteral } from "@/core/processors/Literal";
import { processLambdaExpression } from "@/core/processors/LambdaExpression";
import { processCallExpression } from "@/core/processors/CallExpression";

export const processors: { [key: string]: Function } = {
  AssignmentExpression: processAssignmentExpression,
  ArrayExpression: processArrayExpression,
  ArrowFunctionExpression: processArrowFunctionExpression,
  BinaryExpression: processBinaryExpression,
  BlockStatement: processBlockStatement,
  CallExpression: processCallExpression,
  EmptyStatement: () => {},
  Identifier: processIdentifier,
  LambdaExpression: processLambdaExpression,
  Literal: processLiteral,
  LogicalExpression: processLogicalExpression,
  MemberExpression: processMemberExpression,
  ObjectExpression: processObjectExpression,
  Program: processProgram,
  ReturnStatement: processReturnStatement,
  SequenceExpression: processSequenceExpression,
  UnaryExpression: processUnaryExpression,
  UpdateExpression: processUpdateExpression,
  VariableDeclaration: processVariableDeclaration,
};
