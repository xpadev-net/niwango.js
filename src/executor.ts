import typeGuard from "@/typeGuard";
import { Execute, Utils } from "@/@types/execute";
import {
  processAssignmentExpression,
  processArrayExpression,
  processBinaryExpression,
  processBlockStatement,
  processCallExpression,
  processIdentifier,
  processLogicalExpression,
  processMemberExpression,
  processObjectExpression,
  processProgram,
  processSequenceExpression,
  processUnaryExpression,
  processUpdateExpression,
  processVariableDeclaration,
} from "@/execute";
import { NotImplementedError } from "@/errors/NotImplementedError";

let context: CanvasRenderingContext2D;

const execute: Execute = (script: unknown, scopes: T_scope[]): unknown => {
  const utils: Utils = {
    execute,
    assign,
    argumentParser,
    getName,
    context,
  };
  try {
    if (!script) {
      return;
    }
    if (typeGuard.ExpressionStatement(script)) {
      return execute(script.expression, scopes);
    } else if (typeGuard.AssignmentExpression(script)) {
      return processAssignmentExpression(script, scopes, utils);
    } else if (typeGuard.ArrayExpression(script)) {
      return processArrayExpression(script, scopes, utils);
    } else if (typeGuard.ArrowFunctionExpression(script)) {
      return execute(script.body, scopes);
    } else if (typeGuard.BinaryExpression(script)) {
      return processBinaryExpression(script, scopes, utils);
    } else if (typeGuard.BlockStatement(script)) {
      return processBlockStatement(script, scopes, utils);
    } else if (typeGuard.CallExpression(script)) {
      return processCallExpression(script, scopes, utils);
    } else if (typeGuard.IfStatement(script)) {
      throw new NotImplementedError("if statement", script, scopes);
    } else if (typeGuard.Identifier(script)) {
      return processIdentifier(script, scopes, utils);
    } else if (typeGuard.LambdaExpression(script)) {
      return { ...script, scopes } as A_LambdaExpression;
    } else if (typeGuard.Literal(script)) {
      return script.value;
    } else if (typeGuard.LogicalExpression(script)) {
      return processLogicalExpression(script, scopes, utils);
    } else if (typeGuard.MemberExpression(script)) {
      return processMemberExpression(script, scopes, utils);
    } else if (typeGuard.ObjectExpression(script)) {
      return processObjectExpression(script, scopes, utils);
    } else if (typeGuard.Program(script)) {
      return processProgram(script, scopes, utils);
    } else if (typeGuard.ReturnStatement(script)) {
      return execute(script.argument, scopes);
    } else if (typeGuard.SequenceExpression(script)) {
      return processSequenceExpression(script, scopes, utils);
    } else if (typeGuard.UnaryExpression(script)) {
      return processUnaryExpression(script, scopes, utils);
    } else if (typeGuard.UpdateExpression(script)) {
      return processUpdateExpression(script, scopes, utils);
    } else if (typeGuard.VariableDeclaration(script)) {
      return processVariableDeclaration(script, scopes, utils);
    } else {
      console.error("[unknown]", script, scopes);
    }
  } catch (e: unknown) {
    console.error(e);
    if (e instanceof Error) {
      console.error(`${e.name}: ${e.message}`, script, scopes);
    }
    console.trace();
  }
  return;
};

const argumentParser = (inputs: Argument<A_ANY>[], scopes: T_scope[], keys: string[], compute: boolean = true) => {
  const result: { [key: string]: unknown } = {};
  const nonKeyValues: Argument<A_ANY>[] = [];
  for (const i in inputs) {
    const item = inputs[i];
    if (!item) {
      continue;
    }
    if (item?.NIWANGO_Identifier) {
      const key = getName(item.NIWANGO_Identifier, scopes) as string;
      if (keys.includes(key)) {
        result[key] = compute ? execute(item, scopes) : item;
        continue;
      }
    }
    nonKeyValues.push(item);
  }
  let i = 0;
  for (const key of keys) {
    const value = nonKeyValues[i];
    if (!result[key] && value) {
      result[key] = compute ? execute(value, scopes) : value;
      i++;
    }
  }
  return result;
};
const getName = (target: A_ANY, scopes: T_scope[]) => {
  if (typeGuard.Identifier(target)) {
    return target.name;
  } else {
    return execute(target, scopes);
  }
};
const setContext = (input: CanvasRenderingContext2D) => {
  context = input;
};

const assign = (target: A_ANY, value: unknown, scopes: T_scope[]) => {
  if (scopes.length < 1) {
    return;
  }
  try {
    if (typeGuard.Identifier(target)) {
      for (const scope of scopes) {
        if (scope[target.name] !== undefined) {
          scope[target.name] = value;
          return;
        }
      }
      if (scopes[0]) {
        scopes[0][target.name] = value;
      }
    } else if (typeGuard.MemberExpression(target)) {
      const left = execute(target.object, scopes);
      if (!typeGuard.object(left)) {
        console.error("[assign] left is not object", target, value, scopes);
        return;
      }
      const key = (target.computed ? execute(target.property, scopes) : getName(target.property, scopes)) as string;
      left[key] = value;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(`[assign] ${e.name}: ${e.message}`, target, value, scopes);
    }
  }
};

export { execute, setContext, getName };
