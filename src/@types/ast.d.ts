export type A_ANY =
  | A_Identifier
  | A_Literal
  | A_ExpressionStatement
  | A_AssignmentExpression
  | A_ArrayExpression
  | A_ArrowFunctionExpression
  | A_BinaryExpression
  | A_BlockStatement
  | A_CallExpression
  | A_IfStatement
  | A_Lambda
  | A_LambdaExpression
  | A_MemberExpression
  | A_LogicalExpression
  | A_ObjectExpression
  | A_Program
  | A_Property
  | A_ReturnStatement
  | A_SequenceExpression
  | A_UnaryExpression
  | A_UpdateExpression
  | A_VariableDeclarator
  | A_VariableDeclaration
  | A_EmptyStatement;
export type A_Identifier = {
  type: "Identifier";
  name: string;
};
export type A_Literal = {
  type: "Literal";
  value: null | boolean | number | string;
};
export type A_ExpressionStatement = {
  type: "ExpressionStatement";
  expression: A_ANY;
};
export type A_AssignmentExpression = {
  type: "AssignmentExpression";
  operator: AssignmentExpressionOperator;
  left: A_ANY;
  right: A_ANY;
};
export type AssignmentExpressionOperator =
  | "="
  | "+="
  | "-="
  | "*="
  | "/="
  | "%="
  | "**="
  | "<<="
  | ">>="
  | ">>>="
  | "&="
  | "^="
  | "|="
  | "&&="
  | "||="
  | "??=";
export type A_ArrayExpression = {
  type: "ArrayExpression";
  elements: A_ANY[];
};
export type A_ArrowFunctionExpression = {
  type: "ArrowFunctionExpression";
  body: A_BlockStatement;
};
export type A_BinaryExpression = {
  type: "BinaryExpression";
  operator: BinaryExpressionOperator;
  left: A_ANY;
  right: A_ANY;
};
export type BinaryExpressionOperator =
  | ">="
  | "<="
  | ">"
  | "<"
  | "!="
  | "!=="
  | "=="
  | "==="
  | "+"
  | "-"
  | "*"
  | "/"
  | "%"
  | "**"
  | "&"
  | "|"
  | "^"
  | "<<"
  | ">>"
  | ">>>";
export type A_BlockStatement = {
  type: "BlockStatement";
  body: A_ANY[];
};
export type A_CallExpression = {
  type: "CallExpression";
  callee: A_ANY;
  arguments: Argument<A_ANY>[];
  NIWANGO_Identifier?: A_ANY;
};
export type A_IfStatement = {
  type: "IfStatement";
  test: A_ANY;
};
export type A_Lambda = {
  type: "CallExpression";
  callee: { type: "Identifier"; name: "\\" };
  arguments: [A_CallExpression];
};
export type A_LambdaExpression = {
  type: "LambdaExpression";
  body: A_BlockStatement;
  scopes: T_scope[];
};
export type A_MemberExpression = {
  type: "MemberExpression";
  object: A_ANY;
  property: A_ANY;
  computed: boolean;
};
export type A_LogicalExpression = {
  type: "LogicalExpression";
  left: A_ANY;
  right: A_ANY;
  operator: string;
};
export type A_ObjectExpression = {
  type: "ObjectExpression";
  properties: A_Property[];
};
export type A_Program = {
  type: "Program";
  body: A_ANY[];
};
export type A_Property = {
  type: "Property";
  key: A_ANY;
  value: A_ANY;
};
export type A_ReturnStatement = {
  type: "ReturnStatement";
  argument: A_ANY;
};
export type A_SequenceExpression = {
  type: "SequenceExpression";
  expressions: A_ANY[];
};
export type A_UnaryExpression = {
  type: "UnaryExpression";
  operator: string;
  prefix: boolean;
  argument: A_ANY;
};
export type A_UpdateExpression = {
  type: "UpdateExpression";
  operator: string;
  argument: A_ANY;
  prefix: boolean;
};
export type A_VariableDeclaration = {
  type: "VariableDeclaration";
  declarations: A_VariableDeclarator[];
  kind: string;
};
export type A_VariableDeclarator = {
  id: A_ANY;
  init: A_ANY | null;
  type: "VariableDeclarator";
};
export type A_EmptyStatement = {
  type: "EmptyStatement";
};
export type T_scope = {
  [key: string]: unknown;
};
export type T_environment = {
  chat?: T_chat;
  commentColor: number | null; //0xffffff
  commentPlace: T_commentPos | null; //naka
  commentSize: T_commentSize | null; //medium
  commentInvisible: boolean | null; //false
  commentReverse: number | null; //0
  defaultSage: false; //false
  postDisabled: boolean | null; //false
  seekDisabled: boolean | null; //false
  isLoaded: true; //true
  isWide: boolean | null; //false
  lastVideo: "sm1"; //sm1
  readonly screenWidth: number;
  readonly screenHeight: number;
};
export type T_chat = {
  message: string;
  vpos: number;
  isYourPost: false;
  mail: string;
  fromButton: boolean;
  isPremium: boolean;
  color: number | undefined;
  size: number | undefined;
  no: number;
};
export type T_commentPos = "ue" | "naka" | "shita";
export type T_commentSize = "big" | "medium" | "small";
export type Argument<T> = T & {
  NIWANGO_Identifier: null | A_ANY;
};

export {};
