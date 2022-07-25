type A_ANY = {
  type: string;
};
type A_Identifier = {
  type: "Identifier";
  name: string;
};
type A_Literal = {
  type: "Literal";
  value: null | boolean | number | string;
};
type A_ExpressionStatement = {
  type: "ExpressionStatement";
  expression: unknown;
};
type A_AssignmentExpression = {
  type: "AssignmentExpression";
  operator: "=";
  left: unknown;
  right: unknown;
};
type A_ArrayExpression = {
  type: "ArrayExpression";
  elements: unknown[];
};
type A_ArrowFunctionExpression = {
  type: "ArrowFunctionExpression";
  body: A_BlockStatement;
};
type A_BinaryExpression = {
  type: "BinaryExpression";
  operator: string;
  left: unknown;
  right: unknown;
};
type A_BlockStatement = {
  type: "BlockStatement";
  body: unknown[];
};
type A_CallExpression = {
  type: "CallExpression";
  callee?: unknown;
  arguments: unknown[];
};
type A_IfStatement = {
  type: "IfStatement";
  test: unknown;
};

type A_MemberExpression = {
  type: "MemberExpression";
  object: unknown;
  property: unknown;
};
type A_Program = {
  type: "Program";
  body: unknown[];
};
type A_UnaryExpression = {
  type: "UnaryExpression";
  operator: string;
  argument: unknown;
};
type A_UpdateExpression = {
  type: "UpdateExpression";
  operator: unknown;
  argument: unknown;
  prefix: boolean;
};
type A_VariableDeclaration = {
  type: "VariableDeclaration";
  declarations: unknown;
  kind: string;
};
