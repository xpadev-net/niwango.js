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
  expression: A_ANY;
};
type A_AssignmentExpression = {
  type: "AssignmentExpression";
  operator: "=";
  left: A_ANY;
  right: A_ANY;
};
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
  operator: string;
  left: A_ANY;
  right: A_ANY;
};
type A_BlockStatement = {
  type: "BlockStatement";
  body: A_ANY[];
};
type A_CallExpression = {
  type: "CallExpression";
  callee?: A_ANY;
  arguments: A_ANY[];
};
type A_CallExpression_drawShape = A_CallExpression & {
  callee: "drawShape";
};
type A_CallExpression_drawText = A_CallExpression & {
  callee: "drawText" | "dt";
};
type A_CallExpression_commentTrigger = A_CallExpression & {
  callee: "commentTrigger" | "ctrig";
};
type A_CallExpression_if = A_CallExpression & {
  callee: "if";
};
type A_CallExpression_timer = A_CallExpression & {
  callee: "timer";
};
type A_CallExpression_jump = A_CallExpression & {
  callee: "jump";
};
type A_CallExpression_jumpCancel = A_CallExpression & {
  callee: "jumpCancel";
};
type A_CallExpression_seek = A_CallExpression & {
  callee: "seek";
};
type A_CallExpression_addMarker = A_CallExpression & {
  callee: "addMarker";
};
type A_CallExpression_getMarker = A_CallExpression & {
  callee: "getMarker";
};
type A_CallExpression_sum = A_CallExpression & {
  callee: "sum";
};
type A_CallExpression_showResult = A_CallExpression & {
  callee: "showResult";
};
type A_CallExpression_replace = A_CallExpression & {
  callee: "replace";
};
type A_CallExpression_rand = A_CallExpression & {
  callee: "rand";
};
type A_CallExpression_distance = A_CallExpression & {
  callee: "distance";
};
type A_CallExpression_screenWidth = A_CallExpression & {
  callee: "screenWidth";
};
type A_CallExpression_screenHeight = A_CallExpression & {
  callee: "screenHeight";
};
type A_CallExpression_addButton = A_CallExpression & {
  callee: "addButton";
};
type A_CallExpression_playStartTime = A_CallExpression & {
  callee: "playStartTime";
};
type A_CallExpression_BGM = A_CallExpression & {
  callee: "BGM";
};
type A_CallExpression_playBGM = A_CallExpression & {
  callee: "playBGM";
};
type A_CallExpression_stopBGM = A_CallExpression & {
  callee: "stopBGM";
};
type A_CallExpression_addAtPausePoint = A_CallExpression & {
  callee: "addAtPausePoint";
};
type A_CallExpression_addPostRoute = A_CallExpression & {
  callee: "addPostRoute";
};
type A_CallExpression_CM = A_CallExpression & {
  callee: "CM";
};
type A_CallExpression_playCM = A_CallExpression & {
  callee: "playCM";
};
type A_IfStatement = {
  type: "IfStatement";
  test: A_ANY;
};

type A_MemberExpression = {
  type: "MemberExpression";
  object: A_ANY;
  property: A_ANY;
};
type A_Program = {
  type: "Program";
  body: A_ANY[];
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
type T_scope = {
  [key: string]: unknown;
};
type T_environment = {
  chat?: T_chat;
  commentColor: number | undefined; //0xffffff
  commentPlace: T_commentPos | undefined; //naka
  commentSize: T_commentSize | undefined; //medium
  commentInvisible: boolean | undefined; //false
  commentReverse: number | undefined; //0
  defaultSage: false; //false
  postDisabled: boolean | undefined; //false
  seekDisabled: boolean | undefined; //false
  isLoaded: true; //true
  isWide: boolean | undefined; //false
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
