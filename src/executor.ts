// import { A_LambdaExpression, T_scope } from "@/@types/ast";
// import { Execute } from "@/@types/execute";
// import { setExecute } from "@/context";
// import { NotImplementedError } from "@/errors/NotImplementedError";
// import {
//   processArrayExpression,
//   processAssignmentExpression,
//   processBinaryExpression,
//   processBlockStatement,
//   processCallExpression,
//   processIdentifier,
//   processLogicalExpression,
//   processMemberExpression,
//   processObjectExpression,
//   processProgram,
//   processSequenceExpression,
//   processUnaryExpression,
//   processUpdateExpression,
//   processVariableDeclaration,
// } from "@/execute";
// import typeGuard from "@/typeGuard";
//
// /**
//  * ASTを実行する関数
//  * @param script
//  * @param scopes
//  */
// const execute: Execute = (script: unknown, scopes: T_scope[]): unknown => {
//   try {
//     if (!script) {
//       return;
//     }
//     if (typeGuard.ExpressionStatement(script)) {
//       return execute(script.expression, scopes);
//     } else if (typeGuard.AssignmentExpression(script)) {
//       return processAssignmentExpression(script, scopes);
//     } else if (typeGuard.ArrayExpression(script)) {
//       return processArrayExpression(script, scopes);
//     } else if (typeGuard.ArrowFunctionExpression(script)) {
//       return execute(script.body, scopes);
//     } else if (typeGuard.BinaryExpression(script)) {
//       return processBinaryExpression(script, scopes);
//     } else if (typeGuard.BlockStatement(script)) {
//       return processBlockStatement(script, scopes);
//     } else if (typeGuard.CallExpression(script)) {
//       return processCallExpression(script, scopes);
//     } else if (typeGuard.EmptyStatement(script)) {
//       return;
//     } else if (typeGuard.IfStatement(script)) {
//       throw new NotImplementedError( script, scopes);
//     } else if (typeGuard.Identifier(script)) {
//       return processIdentifier(script, scopes);
//     } else if (typeGuard.LambdaExpression(script)) {
//       return { ...script, scopes } as A_LambdaExpression;
//     } else if (typeGuard.Literal(script)) {
//       return script.value;
//     } else if (typeGuard.LogicalExpression(script)) {
//       return processLogicalExpression(script, scopes);
//     } else if (typeGuard.MemberExpression(script)) {
//       return processMemberExpression(script, scopes);
//     } else if (typeGuard.ObjectExpression(script)) {
//       return processObjectExpression(script, scopes);
//     } else if (typeGuard.Program(script)) {
//       return processProgram(script, scopes);
//     } else if (typeGuard.ReturnStatement(script)) {
//       return execute(script.argument, scopes);
//     } else if (typeGuard.SequenceExpression(script)) {
//       return processSequenceExpression(script, scopes);
//     } else if (typeGuard.UnaryExpression(script)) {
//       return processUnaryExpression(script, scopes);
//     } else if (typeGuard.UpdateExpression(script)) {
//       return processUpdateExpression(script, scopes);
//     } else if (typeGuard.VariableDeclaration(script)) {
//       return processVariableDeclaration(script, scopes);
//     } else {
//       console.error("[unknown]", script, scopes);
//     }
//   } catch (e: unknown) {
//     console.error(e);
//     if (e instanceof Error) {
//       console.error(`${e.name}: ${e.message}`, script, scopes);
//     }
//     console.trace();
//   }
//   return undefined;
// };
//
// const initExecute = () => {
//   setExecute(execute);
// };
//
// export { initExecute };
