import typeGuard from "@/typeGuard";
import { definedFunction } from "@/@types/function";
import { execute, getName } from "@/context";
import { parse } from "../parser/parser";

const processMemberExpression = (script: A_MemberExpression, scopes: T_scope[]) => {
  const left = execute(script.object, scopes);
  if (left === undefined) {
    console.error("[member expression] left is undefined", script, scopes);
    return;
  }
  const right = (script.computed ? execute(script.property, scopes) : getName(script.property, scopes)) as
    | string
    | number;
  if (typeGuard.object(left) && typeGuard.definedFunction(left[right])) {
    const func = left[right] as definedFunction;
    return execute(func.script.arguments[1], [{ self: left }, ...scopes]);
  }
  if (typeGuard.LambdaExpression(left)) {
    if (typeGuard.SequenceExpression(script.property)) {
      const args: { [key: string]: unknown } = {};
      let index = 0;
      for (const arg of script.property.expressions) {
        args[`@${index++}`] = execute(arg, scopes);
      }
      return execute(left.body, [args, ...left.scopes]);
    }
    return execute(left.body, [{ "@0": right }, ...left.scopes]);
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
        return !!i.match(/^(not|plus|minus)$/);
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
        return !!i.match(/^(increase|decreases)$/);
      })(right)
    ) {
      const operator = { increase: "+", decrease: "-" };
      const BinaryExpression: A_BinaryExpression = {
        type: "BinaryExpression",
        operator: operator[right] as "+" | "-",
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
        return execute(parse(left), scopes);
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
  return (left as { [key: string]: unknown })[right];
};

export { processMemberExpression };
