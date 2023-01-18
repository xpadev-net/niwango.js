import typeGuard from "@/typeGuard";
import { rand } from "@/functions/rand";
import { IrText } from "@/objects/text";
import { getGlobalScope, resolve } from "@/utils/utils";
import { IrShape } from "@/objects/shape";
import { definedFunction } from "@/@types/function";
import {
  Addition,
  BitwiseAND,
  BitwiseNOT,
  BitwiseOR,
  BitwiseXOR,
  Division,
  Exponentiation,
  GreaterThan,
  GreaterThanOrEqual,
  LeftShift,
  LessThan,
  LessThanOrEqual,
  LogicalNot,
  Multiplication,
  Remainder,
  RightShift,
  Subtraction,
  UnaryNegation,
  UnaryPlus,
  UnsignedRightShift,
} from "@/operators";
import { addQueue } from "@/queue";

let context: CanvasRenderingContext2D;

const execute = (script: A_ANY | undefined, scopes: T_scope[]): unknown => {
  //try {
  if (!script) return;
  if (typeGuard.ExpressionStatement(script)) {
    return execute(script.expression, scopes);
  } else if (typeGuard.AssignmentExpression(script)) {
    const left = execute(script.left, scopes);
    const right = execute(script.right, scopes);
    const result = (() => {
      if (script.operator === "=") {
        return right;
      } else if (script.operator === "+=") {
        return Addition(left, right);
      } else if (script.operator === "-=") {
        return Subtraction(left, right);
      } else if (script.operator === "*=") {
        return Multiplication(left, right);
      } else if (script.operator === "/=") {
        return Division(left, right);
      } else if (script.operator === "%=") {
        return Remainder(left, right);
      } else if (script.operator === "**=") {
        return Exponentiation(left, right);
      } else if (script.operator === "<<=") {
        return LeftShift(left, right);
      } else if (script.operator === ">>=") {
        return RightShift(left, right);
      } else if (script.operator === ">>>=") {
        return UnsignedRightShift(left, right);
      } else if (script.operator === "&=") {
        return BitwiseAND(left, right);
      } else if (script.operator === "^=") {
        return BitwiseXOR(left, right);
      } else if (script.operator === "|=") {
        return BitwiseOR(left, right);
      } else if (script.operator === "&&=") {
        return left && right;
      } else if (script.operator === "||=") {
        return left || right;
      } else if (script.operator === "??=") {
        return left ?? right;
      }
    })();
    assign(script.left, result, scopes);
    return result;
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
      return GreaterThanOrEqual(left, right);
    } else if (script.operator === "<=") {
      return LessThanOrEqual(left, right);
    } else if (script.operator === ">") {
      return GreaterThan(left, right);
    } else if (script.operator === "<") {
      return LessThan(left, right);
    } else if (script.operator === "!=") {
      return left != right;
    } else if (script.operator === "!==") {
      return left != right;
    } else if (script.operator === "==") {
      return left == right;
    } else if (script.operator === "===") {
      return left === right;
    } else if (script.operator === "+") {
      return Addition(left, right);
    } else if (script.operator === "-") {
      return Subtraction(left, right);
    } else if (script.operator === "*") {
      return Multiplication(left, right);
    } else if (script.operator === "/") {
      return Division(left, right);
    } else if (script.operator === "%") {
      return Remainder(left, right);
    } else if (script.operator === "**") {
      return Exponentiation(left, right);
    } else if (script.operator === "&") {
      return BitwiseAND(left, right);
    } else if (script.operator === "|") {
      return BitwiseOR(left, right);
    } else if (script.operator === "^") {
      return BitwiseXOR(left, right);
    } else if (script.operator === "<<") {
      return LeftShift(left, right);
    } else if (script.operator === ">>") {
      return RightShift(left, right);
    } else if (script.operator === ">>>") {
      return UnsignedRightShift(left, right);
    } else {
      console.warn("[binary expression] unknown operator", script, scopes);
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
    ) as string;
    const object = (
      typeGuard.MemberExpression(script.callee)
        ? execute(script.callee.object, scopes) //local scope
        : getGlobalScope(scopes)
    ) as { [key: string]: unknown }; //global scope
    if (callee === "dump") {
      for (const argument of script.arguments) {
        console.debug("%cdump", "background:green;", execute(argument, scopes));
      }
      return;
    }
    if (callee === "def" && typeGuard.object(object)) {
      const func = (() => {
        if (typeGuard.Identifier(script.arguments[0])) {
          return {
            type: "CallExpression",
            callee: script.arguments[0],
            arguments: [],
          } as A_CallExpression;
        }
        if (typeGuard.CallExpression(script.arguments[0])) {
          return script.arguments[0];
        }
        return;
      })();
      if (!func) return;
      const functionName = getName(func.callee, scopes);
      if (typeof functionName !== "string") {
        console.error();
        return;
      }
      object[functionName] = {
        type: "definedFunction",
        isKari: false,
        script,
      } as definedFunction;
      return;
    }
    if (callee === "def_kari" && typeGuard.object(object)) {
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
      let loopCount = 0;
      while (execute(script.arguments[0], scopes) && loopCount++ <= 10000) {
        execute(script.arguments[1], scopes);
      }
      return;
    }
    if (callee === "times" && !isNaN(Number(object)) && script.arguments[0]) {
      let lastResult;
      for (let i = 0; i < Number(object); i++) {
        lastResult = execute(script.arguments[0], [{ "@0": i }, ...scopes]);
      }
      return lastResult;
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
    if (callee === "commentTrigger" || callee === "ctrig") {
      const args = argumentParser(
        script.arguments,
        scopes,
        ["then", "timer"],
        false
      );
      console.warn("[call expression] commentTrigger", script, args, scopes); //todo: feat commentTrigger
      return;
    }
    if (callee === "if") {
      const args = argumentParser(
        script.arguments,
        scopes,
        ["when", "then", "else"],
        false
      );
      const condition = execute(args.when, scopes);
      if (condition) {
        return execute(args.then, scopes);
      } else {
        return execute(args.else, scopes);
      }
    }
    if (callee === "timer") {
      const args = argumentParser(
        script.arguments,
        scopes,
        ["timer", "then"],
        false
      );
      addQueue(args.then, Number(execute(args.timer, scopes)), scopes);
      return console.info("[call expression] timer:", script, args); //todo: feat timer
    }
    if (callee === "jump") {
      const args = argumentParser(script.arguments, scopes, [
        "id",
        "msg",
        "from",
        "length",
        "return",
        "returnmsg",
        "newwindow",
      ]);
      return console.warn("[call expression] jump:", script, args); //todo: feat jump
    }
    if (callee === "jumpCancel") {
      return console.warn("[call expression] jumpCancel:", script); //todo: feat jumpCancel
    }
    if (callee === "seek") {
      const args = argumentParser(script.arguments, scopes, ["vpos", "msg"]);
      return console.warn("[call expression] seek:", script, args); //todo: feat seek
    }
    if (callee === "addMarker") {
      const args = argumentParser(script.arguments, scopes, ["name", "vpos"]);
      return console.warn("[call expression] addMarker:", script, args); //todo: feat addMarker
    }
    if (callee === "getMarker") {
      const args = argumentParser(script.arguments, scopes, ["name"]);
      return console.warn("[call expression] getMarker:", script, args); //todo: feat getMarker
    }
    if (callee === "sum") {
      const args = argumentParser(script.arguments, scopes, [
        "x",
        "y",
        "size",
        "color",
        "visible",
        "enabled",
        "pos",
        "asc",
        "unit",
        "buttononly",
        "words",
        "partial",
      ]);
      return console.warn("[call expression] sum:", script, args); //todo: feat sum
    }
    if (callee === "showResult") {
      const args = argumentParser(script.arguments, scopes, [
        "x",
        "y",
        "size",
        "color",
        "visible",
        "pos",
        "unit",
        "asc",
        "sum",
      ]);
      return console.warn("[call expression] showResult:", script, args); //todo: feat showResult
    }
    if (callee === "replace") {
      const args = argumentParser(script.arguments, scopes, [
        "src",
        "dest",
        "enabled",
        "target",
        "fill",
        "partial",
        "color",
        "size",
        "pos",
      ]);
      return console.warn("[call expression] replace:", script, args); //todo: feat replace
    }
    if (callee === "rand") {
      if (script.arguments[0])
        return rand(execute(script.arguments[0], scopes));
      return rand();
    }
    if (callee === "distance") {
      const args = argumentParser(script.arguments, scopes, [
        "x1",
        "y1",
        "x2",
        "y2",
      ]);
      return console.warn("[call expression] distance:", script, args); //todo: feat distance
    }
    if (callee === "screenWidth") {
      return console.warn("[call expression] screenWidth:", script); //todo: feat screenWidth
    }
    if (callee === "screenHeight") {
      return console.warn("[call expression] screenHeight:", script); //todo: feat screenWidth
    }
    if (callee === "addButton") {
      const args = argumentParser(script.arguments, scopes, [
        "message",
        "mail",
        "vpos",
        "commes",
        "commail",
        "comvisible",
        "limit",
        "hidden",
      ]);
      return console.warn("[call expression] addButton:", script, args); //todo: feat addButton
    }
    if (callee === "playStartTime") {
      return new Date().getTime();
    }
    if (callee === "BGM") {
      const args = argumentParser(script.arguments, scopes, [
        "id",
        "x",
        "y",
        "width",
        "height",
        "visual",
        "volume",
      ]);
      return console.warn("[call expression] BGM:", script, args); //todo: feat BGM
    }
    if (callee === "playBGM") {
      const args = argumentParser(script.arguments, scopes, ["id"]);
      return console.warn("[call expression] playBGM:", script, args); //todo: feat playBGM
    }
    if (callee === "stopBGM") {
      const args = argumentParser(script.arguments, scopes, ["id"]);
      return console.warn("[call expression] stopBGM:", script, args); //todo: feat stopBGM
    }
    if (callee === "addAtPausePoint") {
      const args = argumentParser(script.arguments, scopes, ["vpos", "wait"]);
      return console.warn("[call expression] addAtPausePoint:", script, args); //todo: feat addAtPausePoint
    }
    if (callee === "addPostRoute") {
      const args = argumentParser(script.arguments, scopes, [
        "match",
        "id",
        "button",
      ]);
      return console.warn("[call expression] addPostRoute:", script, args); //todo: feat addPostRoute
    }
    if (callee === "CM") {
      const args = argumentParser(script.arguments, scopes, [
        "id",
        "time",
        "pause",
        "link",
        "volume",
      ]);
      return console.warn("[call expression] CM:", script, args); //todo: feat CM
    }
    if (callee === "playCM") {
      const args = argumentParser(script.arguments, scopes, ["id"]);
      return console.warn("[call expression] playCM:", script, args); //todo: feat playCM
    }
    if (callee === "timethis") {
      console.time("timethis");
      const result = execute(script.arguments[0], scopes);
      console.timeEnd("timethis");
      return result;
    }

    if (callee === "@") {
      if (!script.arguments[0]) {
        console.error("[call expression] @: at least 1 argument required");
        return;
      }
      assign(
        script.arguments[0],
        resolve({ type: "Identifier", name: "@0" }, scopes),
        scopes
      );
      return;
    }
    if (typeGuard.MemberExpression(script.callee)) {
      if (callee === "pow") {
        const left = execute(script.callee.object, scopes);
        const right = execute(script.arguments[0], scopes);
        return Exponentiation(left, right);
      } else if (callee === "index") {
        const left = execute(script.callee.object, scopes);
        const right = execute(script.arguments[0], scopes);
        if (typeof left === "string") return left.charAt(Number(right));
        if (Array.isArray(left)) return left[Number(right)];
      } else if (callee === "indexOf") {
        const left = execute(script.callee.object, scopes);
        const right = execute(script.arguments[0], scopes);
        if (typeof left !== "string") {
          console.error(
            "[call expression] String.indexOf: indexOf cannot be used for anything other than String"
          );
          return;
        }
        return left.indexOf(`${right}`);
      } else if (callee === "slice") {
        const left = execute(script.callee.object, scopes);
        const arg1 = Number(execute(script.arguments[0], scopes));
        if (typeof left !== "string") {
          console.error(
            "[call expression] String.slice: slice cannot be used for anything other than String"
          );
          return;
        }
        if (script.arguments[1]) {
          const arg2 = Number(execute(script.arguments[1], scopes));
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
        if (!Array.isArray(left)) {
          console.error(
            "[call expression] Array.join: join cannot be used for anything other than Array"
          );
          return;
        }
        const arg1 = execute(script.arguments[0], scopes);
        return left.join(`${arg1}`);
      } else if (callee === "setSlot") {
        const left = execute(script.callee.object, scopes);
        if (!typeGuard.object(left)) {
          console.error(
            "[call expression] Object.setSlot: setSlot cannot be used for anything other than Object"
          );
          return;
        }
        const key = execute(script.arguments[0], scopes) as string;
        const value = execute(script.arguments[1], scopes);
        return (left[key] = value);
      } else if (callee === "getSlot") {
        const left = execute(script.callee.object, scopes);
        if (!typeGuard.object(left)) {
          console.error(
            "[call expression] Object.setSlot: setSlot cannot be used for anything other than Object"
          );
          return;
        }
        const key = execute(script.arguments[0], scopes) as string;
        return left[key];
      } else if (callee === "alternative" || callee === "alt") {
        const args = argumentParser(
          script.arguments,
          scopes,
          ["then", "else"],
          false
        );
        const left = execute(script.callee.object, scopes);
        if (left && args.then) {
          return execute(args.then, scopes);
        } else if (!left && args.else) {
          return execute(args.else, scopes);
        }
        return;
      }
    }
    if (object && object[callee]) {
      const func = object[callee] as definedFunction;
      if (func.type !== "definedFunction") return;
      if (func.isKari) {
        const args: { [key: string]: unknown } = {};
        let count = 1;
        script.arguments.forEach((val) => {
          if (val.NIWANGO_Identifier) {
            args[getName(val.NIWANGO_Identifier, scopes) as string] = execute(
              val,
              scopes
            );
          } else {
            args[`$${count++}`] = execute(val, scopes);
          }
        });
        return execute(func.script.arguments[1], [args, ...scopes]);
      } else {
        const argNames = func.script.arguments[0].arguments.map(
          (arg) => getName(arg, scopes) as string
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
    console.trace();
    return;
  } else if (typeGuard.IfStatement(script)) {
    return console.error("niwascript doesnt support if statement");
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
    const right = (
      script.computed
        ? execute(script.property, scopes)
        : getName(script.property, scopes)
    ) as string;
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
    return (left as { [key: string]: unknown })[right];
  } else if (typeGuard.ObjectExpression(script)) {
    const object: { [key: string | number | symbol]: unknown } = {};
    for (const item of script.properties) {
      object[getName(item.key, scopes) as string] = execute(item.value, scopes);
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
    const value = execute(script.argument, scopes);
    if (script.operator === "-") {
      return UnaryNegation(value);
    } else if (script.operator === "+") {
      return UnaryPlus(value);
    } else if (script.operator === "~") {
      return BitwiseNOT(value);
    } else if (script.operator === "!") {
      return LogicalNot(value);
    }
    console.error(`[unary expression] unknown operator`, script, scopes);
  } else if (typeGuard.UpdateExpression(script)) {
    const value = execute(script.argument, scopes);
    if (script.operator === "--") {
      const result = Subtraction(value, 1);
      assign(script.argument, result, scopes);
      if (script.prefix) {
        return result;
      } else {
        return value;
      }
    } else if (script.operator === "++") {
      const result = Addition(value, 1);
      assign(script.argument, result, scopes);
      if (script.prefix) {
        return result;
      } else {
        return value;
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
        if (scopes[0])
          scopes[0][getName(item.id, scopes) as string] = execute(
            item.init,
            scopes
          );
      }
    }
  } else {
    console.error(`[unknown]`, script, scopes);
  }
  /*} catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e.name + ": " + e.message, script, scopes);
    }
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
      if (!typeGuard.object(left)) {
        console.error("[assign] left is not object");
        return;
      }
      const key = (
        target.computed
          ? execute(target.property, scopes)
          : getName(target.property, scopes)
      ) as string;
      left[key] = value;
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(`[assign] ${e.name}: ${e.message}`, target, value, scopes);
    }
  }
};

export { execute, setContext, getName };
