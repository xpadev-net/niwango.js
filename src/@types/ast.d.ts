type A_ANY =
  | {
      type: string;
    }
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
  | A_VariableDeclaration;
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
  expression: A_ANY;
};
type A_AssignmentExpression = {
  type: "AssignmentExpression";
  operator: AssignmentExpressionOperator;
  left: A_ANY;
  right: A_ANY;
};
type AssignmentExpressionOperator =
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
type A_ArrayExpression = {
  type: "ArrayExpression";
  elements: A_ANY[];
};
type A_ArrowFunctionExpression = {
  type: "ArrowFunctionExpression";
  body: A_BlockStatement;
};
type A_BinaryExpression = {
  type: "BinaryExpression";
  operator: BinaryExpressionOperator;
  left: A_ANY;
  right: A_ANY;
};
type BinaryExpressionOperator =
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
type A_BlockStatement = {
  type: "BlockStatement";
  body: A_ANY[];
};
type A_CallExpression = {
  type: "CallExpression";
  callee: A_ANY;
  arguments: A_ANY[];
  NIWANGO_Identifier?: A_ANY;
};
type A_IfStatement = {
  type: "IfStatement";
  test: A_ANY;
};
type A_Lambda = {
  type: "CallExpression";
  callee: { type: "Identifier"; name: "\\" };
  arguments: [A_CallExpression];
};
type A_LambdaExpression = {
  type: "LambdaExpression";
  body: A_BlockStatement;
};
type A_MemberExpression = {
  type: "MemberExpression";
  object: A_ANY;
  property: A_ANY;
  computed: boolean;
};
type A_LogicalExpression = {
  type: "LogicalExpression";
  left: A_ANY;
  right: A_ANY;
  operator: string;
};
type A_ObjectExpression = {
  type: "ObjectExpression";
  properties: A_Property[];
};
type A_Program = {
  type: "Program";
  body: A_ANY[];
};
type A_Property = {
  type: "Property";
  key: A_ANY;
  value: A_ANY;
};
type A_ReturnStatement = {
  type: "ReturnStatement";
  argument: A_ANY[];
};
type A_SequenceExpression = {
  type: "SequenceExpression";
  expressions: A_ANY[];
};
type A_UnaryExpression = {
  type: "UnaryExpression";
  operator: string;
  prefix: boolean;
  argument: A_ANY;
};
type A_UpdateExpression = {
  type: "UpdateExpression";
  operator: string;
  argument: A_ANY;
  prefix: boolean;
};
type A_VariableDeclaration = {
  type: "VariableDeclaration";
  declarations: A_VariableDeclarator[];
  kind: string;
};
type A_VariableDeclarator = {
  id: A_ANY;
  init: A_ANY | null;
  type: "VariableDeclarator";
};
type T_scope = {
  [key: string]: unknown;
};
type T_environment = {
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
};
type T_chat = {
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
type T_commentPos = "ue" | "naka" | "shita";
type T_commentSize = "big" | "medium" | "small";
type T_parse = (script: string) => A_ANY;
type Argument<T> = T & {
  NIWANGO_Identifier: null | A_ANY;
};
