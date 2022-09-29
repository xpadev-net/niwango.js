import typeGuard from "@/typeGuard";
import { rand } from "@/functions/rand";
import { IrText } from "@/objects/text";

let context: CanvasRenderingContext2D;

const execute = (script: A_ANY, scopes: T_scope[]) => {
  try {
    if (!script) return;
    if (typeGuard.ExpressionStatement(script)) {
      execute(script.expression, scopes);
    } else if (typeGuard.AssignmentExpression(script)) {
      const left = execute(script.left, scopes);
      if (script.operator === "=") {
        const result = execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      } else if (script.operator === "+=") {
        const result = left + execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      } else if (script.operator === "-=") {
        const result = left - execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      } else if (script.operator === "*=") {
        const result = left * execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      } else if (script.operator === "/=") {
        const result = left / execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      }
    } else if (typeGuard.ArrayExpression(script)) {
      return script.elements.reduce((pv, value) => {
        pv.push(execute(value, scopes));
        return pv;
      }, [] as unknown[]);
    } else if (typeGuard.ArrowFunctionExpression(script)) {
      return execute(script.body, scopes);
    } else if (typeGuard.BinaryExpression(script)) {
      const left = execute(script.left, scopes),
        right = execute(script.right, scopes);
      if (script.operator === ">=") {
        return left >= right;
      } else if (script.operator === "<=") {
        return left <= right;
      } else if (script.operator === ">") {
        return left > right;
      } else if (script.operator === "<") {
        return left < right;
      } else if (script.operator === "!=") {
        return left != right;
      } else if (script.operator === "+") {
        return left + right;
      } else if (script.operator === "-") {
        return left - right;
      } else if (script.operator === "*") {
        return left * right;
      } else if (script.operator === "/") {
        return left / right;
      } else {
        console.warn("unknown binary expression:", script, scopes);
      }
    } else if (typeGuard.BlockStatement(script)) {
      for (let item of script.body) {
        execute(item, scopes);
      }
    } else if (typeGuard.CallExpression(script)) {
      const isMemberExpression = typeGuard.MemberExpression(script.callee);
      const callee = getName(
        isMemberExpression
          ? (script.callee as A_MemberExpression).property
          : script.callee,
        scopes
      );
      let object = getGlobalScope(scopes); //global scope
      if (typeGuard.MemberExpression(script.callee)) {
        object = execute(script.callee.object, scopes);
      }
      if (callee === "dump") {
        for (const argument of script.arguments) {
          console.debug(
            "%cdump",
            "background:green;",
            execute(argument, scopes)
          );
        }
      } else if (callee === "def" && typeof object === "object") {
        if (!typeGuard.CallExpression(script.arguments[0])) return;
        const functionName = getName(script.arguments[0].callee, scopes);
        object[functionName] = script;
      } else if (callee === "def_kari" && typeof object === "object") {
        if (!script.arguments[0]) return;
        const functionName = execute(script.arguments[0], scopes);
        if (typeof functionName !== "string") return;
        object[functionName] = script;
      } else if (object && object[callee]) {
        return execute(
          (object[callee] as A_CallExpression).arguments[1],
          scopes
        );
      } else if (callee === "times" && !isNaN(Number(object))) {
        for (let i = 0; i < Number(object); i++) {
          execute(script.arguments[0], [{ "@0": i }, ...scopes]);
        }
      } else if (callee === "rand") {
        return rand(execute(script.arguments[0], scopes));
      } else if (callee === "dt" || callee === "drawText") {
        const text = new IrText(context, {});
        return text;
      } else {
        console.log("%cCallExpression:", "background:red;", script, scopes);
      }
    } else if (typeGuard.IfStatement(script)) {
      let test = execute(script.test, scopes);
      console.log("ifstate:", script.test, test, script, scopes);
    } else if (typeGuard.Identifier(script)) {
      return resolve(script, scopes);
    } else if (typeGuard.Literal(script)) {
      return script.value;
    } else if (typeGuard.MemberExpression(script)) {
      const left = execute(script.object, scopes);
      const right = getName(script.property, scopes);
      if (typeof right === "string") {
        if (right === "clone") {
          if (typeof left === "object") {
            if (Array.isArray(left)) {
              return [...left];
            } else {
              return { ...left };
            }
          } else {
            return left;
          }
        } else if (
          (function (i: string): i is "not" | "plus" | "minus" {
            return !!i.match(/^not|plus|minus$/);
          })(right)
        ) {
          const operator = { not: "!", plus: "+", minus: "-" };
          const UnaryExpression: A_UnaryExpression = {
            type: "UnaryExpression",
            operator: operator[right],
            argument: script.object,
            prefix: true,
          };
          return execute(UnaryExpression, scopes);
        } else if (
          (function (i: string): i is "increase" | "decrease" {
            return !!i.match(/^increase|decreases$/);
          })(right)
        ) {
          const operator = { increase: "+", decrease: "-" };
          const BinaryExpression: A_BinaryExpression = {
            type: "BinaryExpression",
            operator: operator[right],
            left: script.object,
            right: {
              type: "Literal",
              value: 1,
            } as A_ANY,
          };
          return execute(BinaryExpression, scopes);
        }
      }
      return left[right];
    } else if (typeGuard.ObjectExpression(script)) {
      const object: { [key: string | number | symbol]: unknown } = {};
      for (const item of script.properties) {
        object[getName(item.key, scopes)] = execute(item.value, scopes);
      }
      console.log(object);
      return object;
    } else if (typeGuard.Program(script)) {
      for (const i in script.body) {
        const item = script.body[i];
        const res = execute(item, scopes);
        if (script.body.length - 1 === Number(i)) {
          return res;
        }
      }
    } else if (typeGuard.ReturnStatement(script)) {
      const data = execute(script.argument, scopes);
      return data;
    } else if (typeGuard.UnaryExpression(script)) {
      const left = execute(script.argument, scopes);
      if (script.operator === "-") {
        return left - 1;
      } else if (script.operator === "+") {
        return left + 1;
      }
      console.log("UnaryExpression:", script, scopes);
    } else if (typeGuard.UpdateExpression(script)) {
      const left = execute(script.argument, scopes);
      if (script.operator === "--") {
        assign(script.argument, left - 1, scopes);
        if (script.prefix) {
          return left - 1;
        } else {
          return left;
        }
      } else if (script.operator === "++") {
        assign(script.argument, left + 1, scopes);
        if (script.prefix) {
          return left + 1;
        } else {
          return left;
        }
      }
      console.log("UpdateExpression:", script, scopes);
    } else if (typeGuard.VariableDeclaration(script)) {
      console.log("VariableDeclaration:", script, scopes);
    } else {
      console.log("unknown", script, scopes);
    }
  } catch (e) {
    console.error(e.name + ": " + e.message, script);
  }
};

const resolve = (script: A_ANY, scopes: T_scope[]) => {
  if (typeGuard.Identifier(script)) {
    for (const scope of scopes) {
      if (scope[script.name] !== undefined) {
        return scope[script.name];
      }
    }
  }
  return undefined;
};
const assign = (target: A_ANY, value: unknown, scopes: T_scope[]) => {
  if (scopes.length < 1) return;
  if (typeGuard.Identifier(target)) {
    for (const scope of scopes) {
      if (scope[target.name] !== undefined) {
        scope[target.name] = value;
        return;
      }
    }
    if (scopes[0]) scopes[0][target.name] = value;
  }
};
const getName = (target: A_ANY, scopes: T_scope[]) => {
  if (typeGuard.Identifier(target)) {
    return target.name;
  } else {
    return execute(target, scopes);
  }
};
const getGlobalScope = (scopes: T_scope[]): T_scope | undefined => {
  if (scopes.length < 2) {
    return undefined;
  } else {
    return scopes[scopes.length - 2];
  }
};
const setContext = (input: CanvasRenderingContext2D) => {
  context = input;
};
export { execute, setContext };
