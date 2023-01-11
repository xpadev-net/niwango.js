import typeGuard from "@/typeGuard";
import { rand } from "@/functions/rand";
import { IrText } from "@/objects/text";
import { getGlobalScope, resolve } from "@/utils/utils";
import { IrShape } from "@/objects/shape";
import { definedFunction } from "@/@types/function";

let context: CanvasRenderingContext2D;

const execute = (script: A_ANY, scopes: T_scope[]): unknown => {
  //try {
  if (!script) return;
  if (typeGuard.ExpressionStatement(script)) {
    return execute(script.expression, scopes);
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
    } else if (script.operator === "%=") {
      const result = left % execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "**=") {
      const result = left ** execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "<<=") {
      const result = left << execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === ">>=") {
      const result = left >> execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === ">>>=") {
      const result = left >>> execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "&=") {
      const result = left & execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "^=") {
      const result = left ^ execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "|=") {
      const result = left | execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "&&=") {
      const result = left && execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "||=") {
      const result = left || execute(script.right, scopes);
      assign(script.left, result, scopes);
      return result;
    } else if (script.operator === "??=") {
      const result = left ?? execute(script.right, scopes);
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
    } else if (script.operator === "!==") {
      return left != right;
    } else if (script.operator === "==") {
      return left == right;
    } else if (script.operator === "===") {
      return left === right;
    } else if (script.operator === "+") {
      return left + right;
    } else if (script.operator === "-") {
      return left - right;
    } else if (script.operator === "*") {
      return left * right;
    } else if (script.operator === "/") {
      return left / right;
    } else if (script.operator === "%") {
      return left % right;
    } else if (script.operator === "**") {
      return left ** right;
    } else if (script.operator === "&") {
      return left & right;
    } else if (script.operator === "|") {
      return left | right;
    } else if (script.operator === "^") {
      return left ^ right;
    } else if (script.operator === "<<") {
      return left << right;
    } else if (script.operator === ">>") {
      return left >> right;
    } else if (script.operator === ">>>") {
      return left >>> right;
    } else {
      console.warn("unknown binary expression:", script, scopes);
    }
  } else if (typeGuard.BlockStatement(script)) {
    let lastValue;
    for (const item of script.body) {
      lastValue = execute(item, scopes);
    }
    return lastValue;
  } else if (typeGuard.CallExpression(script)) {
    const isMemberExpression = typeGuard.MemberExpression(script.callee);
    const callee = getName(
      isMemberExpression
        ? (script.callee as A_MemberExpression).property
        : script.callee,
      scopes
    );
    const object = typeGuard.MemberExpression(script.callee)
      ? execute(script.callee.object, scopes) //local scope
      : getGlobalScope(scopes); //global scope
    if (callee === "dump") {
      for (const argument of script.arguments) {
        console.debug("%cdump", "background:green;", execute(argument, scopes));
      }
      return;
    }
    if (callee === "def" && typeof object === "object") {
      if (typeGuard.Identifier(script.arguments[0])) {
        script.arguments[0] = {
          type: "CallExpression",
          callee: script.arguments[0],
          arguments: [],
        } as A_CallExpression;
      }
      if (!typeGuard.CallExpression(script.arguments[0])) return;

      const functionName = getName(script.arguments[0].callee, scopes);
      object[functionName] = {
        type: "definedFunction",
        isKari: false,
        script,
      } as definedFunction;
      return;
    }
    if (callee === "def_kari" && typeof object === "object") {
      if (!script.arguments[0]) return;
      const functionName = execute(script.arguments[0], scopes);
      if (typeof functionName !== "string") return;
      object[functionName] = {
        type: "definedFunction",
        isKari: true,
        script,
      } as definedFunction;
      return;
    }
    if (callee === "while_kari") {
      if (!script.arguments[0] || !script.arguments[1]) return;
      let i,
        loopCount = 0;
      while ((i = execute(script.arguments[0], scopes)) && loopCount++ <= 100) {
        execute(script.arguments[1], scopes);
      }
      return;
    }
    if (callee === "timer") {
      const args = argumentParser(
        script.arguments,
        scopes,
        ["timer", "then"],
        false
      );
      return console.info("timer:", script, args);
    }
    if (callee === "times" && !isNaN(Number(object))) {
      let lastResult;
      for (let i = 0; i < Number(object); i++) {
        lastResult = execute(script.arguments[0], [{ "@0": i }, ...scopes]);
      }
      return lastResult;
    }
    if (callee === "rand") {
      return rand(execute(script.arguments[0], scopes));
    }
    if (callee === "dt" || callee === "drawText") {
      const args = argumentParser(script.arguments, scopes, [
        "text",
        "x",
        "y",
        "z",
        "size",
        "pos",
        "color",
        "bold",
        "visible",
        "filter",
        "alpha",
        "mover",
      ]);
      const text = new IrText(context, args);
      return text;
    }
    if (callee === "drawShape") {
      const args = argumentParser(script.arguments, scopes, [
        "x",
        "y",
        "z",
        "shape",
        "width",
        "height",
        "color",
        "visible",
        "pos",
        "mask",
        "commentmask",
        "alpha",
        "rotation",
        "mover",
      ]);
      const shape = new IrShape(context, args);
      return shape;
    }
    if (callee === "@") {
      assign(
        script.arguments[0],
        resolve({ type: "Identifier", name: "@0" }, scopes),
        scopes
      );
    }
    if (typeGuard.MemberExpression(script.callee)) {
      if (callee === "pow") {
        const left = execute(script.callee.object, scopes);
        const right = execute(script.arguments[0], scopes);
        return Math.pow(left, right);
      } else if (callee === "index") {
        const left = execute(script.callee.object, scopes);
        const right = execute(script.arguments[0], scopes);
        if (typeof left === "string") return left.charAt(Number(right));
        if (Array.isArray(left)) return left[right];
      } else if (callee === "indexOf") {
        const left = execute(script.callee.object, scopes);
        const right = execute(script.arguments[0], scopes);
        return left.indexOf(right);
      } else if (callee === "slice") {
        const left = execute(script.callee.object, scopes);
        const arg1 = execute(script.arguments[0], scopes);
        if (script.arguments[1]) {
          const arg2 = execute(script.arguments[1], scopes);
          return left.slice(arg1, arg1 + arg2);
        }
        return left.slice(arg1);
      } else if (callee === "unshift") {
        const left = execute(script.callee.object, scopes);
        if (!Array.isArray(left)) return left;
        const args = script.arguments.map((arg) => execute(arg, scopes));
        return left.unshift(...args);
      } else if (callee === "push") {
        const left = execute(script.callee.object, scopes);
        if (!Array.isArray(left)) return left;
        const args = script.arguments.map((arg) => execute(arg, scopes));
        return left.push(...args);
      } else if (callee === "join") {
        const left = execute(script.callee.object, scopes);
        const arg1 = execute(script.arguments[0], scopes);
        return left.join(arg1);
      }
    }
    if (object && object[callee]) {
      const func = object[callee] as definedFunction;
      if (func.type !== "definedFunction") return;
      if (func.isKari) {
        const args: { [key: string]: unknown } = {};
        let count = 1;
        script.arguments.forEach((val, index) => {
          if (val.NIWANGO_Identifier) {
            args[getName(val.NIWANGO_Identifier, scopes)] = execute(
              val,
              scopes
            );
          } else {
            args[`$${count++}`] = execute(val, scopes);
          }
        });
        return execute(func.script.arguments[1], [args, ...scopes]);
      } else {
        const argNames = func.script.arguments[0].arguments.map((arg) =>
          getName(arg, scopes)
        );
        const args = argumentParser(script.arguments, scopes, argNames);
        return execute(func.script.arguments[1], [
          { ...args, self: object },
          ...scopes,
        ]);
      }
    }
    console.warn(
      "%cUnknown CallExpression:",
      "background:red;",
      script,
      scopes
    );
  } else if (typeGuard.IfStatement(script)) {
    const test = execute(script.test, scopes);
    console.warn("ifstate:", script.test, test, script, scopes);
  } else if (typeGuard.Identifier(script)) {
    const value = resolve(script, scopes);
    if (typeGuard.definedFunction(value)) {
      if (value.isKari) {
        return execute(value.script.arguments[1], [{}, ...scopes]);
      } else {
        return execute(value.script.arguments[1], [{}, ...scopes]);
      }
    }
    return value;
  } else if (typeGuard.LambdaExpression(script)) {
    return script;
  } else if (typeGuard.Literal(script)) {
    return script.value;
  } else if (typeGuard.LogicalExpression(script)) {
    const left = execute(script.left, scopes),
      right = execute(script.right, scopes);
    if (script.operator === "&&") {
      return left && right;
    } else if (script.operator === "||") {
      return left || right;
    } else {
      console.error(`[logical expression] unknown operator`, script, scopes);
    }
  } else if (typeGuard.MemberExpression(script)) {
    const left = execute(script.object, scopes);
    if (left === undefined) {
      console.error(`[member expression] left is undefined`, script, scopes);
      return;
    }
    const right = script.computed
      ? execute(script.property, scopes)
      : getName(script.property, scopes);
    if (typeGuard.definedFunction(left[right])) {
      const func = left[right] as definedFunction;
      return execute(func.script.arguments[1], [{ self: left }, ...scopes]);
    }
    if (typeGuard.LambdaExpression(left)) {
      if (typeGuard.SequenceExpression(script.property)) {
        const args = {};
        let index = 0;
        for (const arg of script.property.expressions) {
          args[`@${index++}`] = execute(arg);
        }
        return execute(left.body, [args, ...scopes]);
      }
      return execute(left.body, [{ "@0": right }, ...scopes]);
    }
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
      } else if (right === "size") {
        if (Array.isArray(left) || typeof left === "string") {
          return left.length;
        }
      } else if (typeof left === "number") {
        if (right === "floor") {
          return Math.floor(left);
        } else if (right === "sin") {
          return Math.sin(left);
        } else if (right === "cos") {
          return Math.cos(left);
        } else if (right === "abs") {
          return Math.abs(left);
        }
      } else if (typeof left === "string") {
        if (right === "size") {
          return left.length;
        } else if (right === "toInteger") {
          if (left.match(/^0[1-7]+/)) {
            return parseInt(left, 8);
          }
          return parseInt(left);
        } else if (right === "toFloat") {
          return parseFloat(left);
        } else if (right === "eval") {
          return console.error(
            `[string] eval is currently unavailable`,
            script,
            scopes
          ); //todo: feat string.eval
        }
      } else if (Array.isArray(left)) {
        if (right === "shift") {
          return left.shift();
        } else if (right === "pop") {
          return left.pop();
        } else if (right === "sort") {
          return left.sort();
        } else if (right === "sum") {
          return left.reduce((sum, num) => sum + num, 0);
        } else if (right === "product") {
          return left.reduce((sum, num) => sum * num, 1);
        }
      }
    }
    return left[right];
  } else if (typeGuard.ObjectExpression(script)) {
    const object: { [key: string | number | symbol]: unknown } = {};
    for (const item of script.properties) {
      object[getName(item.key, scopes)] = execute(item.value, scopes);
    }
    return object;
  } else if (typeGuard.Program(script)) {
    let lastValue;
    for (const i in script.body) {
      const item = script.body[i];
      lastValue = execute(item, scopes);
    }
    return lastValue;
  } else if (typeGuard.ReturnStatement(script)) {
    return execute(script.argument, scopes);
  } else if (typeGuard.SequenceExpression(script)) {
    let lastResult;
    for (const arg of script.expressions) {
      lastResult = execute(arg, scopes);
    }
    return lastResult;
  } else if (typeGuard.UnaryExpression(script)) {
    const left = execute(script.argument, scopes);
    if (script.operator === "-") {
      return left * -1;
    } else if (script.operator === "+") {
      return left + 1;
    } else if (script.operator === "~") {
      return ~left;
    } else if (script.operator === "!") {
      return !left;
    }
    console.error(`[unary expression] unknown operator`, script, scopes);
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
    console.error(`[update expression] unknown operator`, script, scopes);
  } else if (typeGuard.VariableDeclaration(script)) {
    for (const item of script.declarations) {
      if (item.init === null) {
        return execute(
          {
            type: "CallExpression",
            callee: item.id,
            arguments: [],
          } as A_CallExpression,
          scopes
        );
      } else {
        if (scopes[0]) scopes[0][getName(item.id)] = execute(item.init, scopes);
      }
    }
  } else {
    console.error(`[unknown]`, script, scopes);
  }
  /*} catch (e) {
    console.error(e.name + ": " + e.message, script);
    console.trace();
  }*/
  return;
};

const argumentParser = (
  inputs: Argument<A_ANY>[],
  scopes: T_scope[],
  keys: string[],
  compute: boolean = true
) => {
  const result: { [key: string]: any } = {};
  const nonKeyValues: Argument<A_ANY>[] = [];
  for (const i in inputs) {
    const item = inputs[i];
    if (!item) continue;
    if (item.NIWANGO_Identifier) {
      const key = getName(item.NIWANGO_Identifier, scopes);
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
  if (scopes.length < 1) return;
  try {
    if (typeGuard.Identifier(target)) {
      for (const scope of scopes) {
        if (scope[target.name] !== undefined) {
          scope[target.name] = value;
          return;
        }
      }
      if (scopes[0]) scopes[0][target.name] = value;
    } else if (typeGuard.MemberExpression(target)) {
      const left = execute(target.object, scopes);
      left[getName(target.property, scopes)] = value;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(`[assign] ${e.name}: ${e.message}`, target, value, scopes);
    }
  }
};

export { execute, setContext, getName };
