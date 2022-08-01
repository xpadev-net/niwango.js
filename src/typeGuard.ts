const typeGuard = {
  Literal: (i: unknown): i is A_Literal =>
    typeof i === "object" && (i as A_ANY).type === "Literal",
  Identifier: (i: unknown): i is A_Identifier =>
    typeof i === "object" && (i as A_ANY).type === "Identifier",
  ExpressionStatement: (i: unknown): i is A_ExpressionStatement =>
    typeof i === "object" && (i as A_ANY).type === "ExpressionStatement",
  AssignmentExpression: (i: unknown): i is A_AssignmentExpression =>
    typeof i === "object" && (i as A_ANY).type === "AssignmentExpression",
  ArrayExpression: (i: unknown): i is A_ArrayExpression =>
    typeof i === "object" && (i as A_ANY).type === "ArrayExpression",
  ArrowFunctionExpression: (i: unknown): i is A_ArrowFunctionExpression =>
    typeof i === "object" && (i as A_ANY).type === "ArrowFunctionExpression",
  BinaryExpression: (i: unknown): i is A_BinaryExpression =>
    typeof i === "object" && (i as A_ANY).type === "BinaryExpression",
  BlockStatement: (i: unknown): i is A_BlockStatement =>
    typeof i === "object" && (i as A_ANY).type === "BlockStatement",
  CallExpression: (i: unknown): i is A_CallExpression =>
    typeof i === "object" && (i as A_ANY).type === "CallExpression",
  IfStatement: (i: unknown): i is A_IfStatement =>
    typeof i === "object" && (i as A_ANY).type === "IfStatement",
  MemberExpression: (i: unknown): i is A_MemberExpression =>
    typeof i === "object" && (i as A_ANY).type === "MemberExpression",
  Program: (i: unknown): i is A_Program =>
    typeof i === "object" && (i as A_ANY).type === "Program",
  UnaryExpression: (i: unknown): i is A_UnaryExpression =>
    typeof i === "object" && (i as A_ANY).type === "UnaryExpression",
  UpdateExpression: (i: unknown): i is A_UpdateExpression =>
    typeof i === "object" && (i as A_ANY).type === "UpdateExpression",
  VariableDeclaration: (i: unknown): i is A_VariableDeclaration =>
    typeof i === "object" && (i as A_ANY).type === "VariableDeclaration",
};
/*const typeVerify = (item: unknown, keys: string[]): boolean => {
  for (let key of keys) {
    if (item[key] === undefined) return false;
  }
  return true;
};
const typeAttributeVerify = (item: unknown, keys: string[]): boolean => {
  for (let key of keys) {
    if (item.getAttribute(key) === null) return false;
  }
  return true;
};*/
export default typeGuard;
