import { Utils } from "@/@types/execute";
import typeGuard from "@/typeGuard";
import { getGlobalScope, resolve } from "@/utils/utils";
import { definedFunction } from "@/@types/function";
import { IrText } from "@/objects/text";
import { IrShape } from "@/objects/shape";
import { addQueue } from "@/queue";
import { rand } from "@/functions/rand";
import { Exponentiation } from "@/operators";
import { NotImplementedError } from "@/errors/NotImplementedError";

const processCallExpression = (
  script: A_CallExpression,
  scopes: T_scope[],
  { execute, getName, argumentParser, context, assign }: Utils,
) => {
  const isMemberExpression = typeGuard.MemberExpression(script.callee);
  const callee = getName(
    isMemberExpression ? (script.callee as A_MemberExpression).property : script.callee,
    scopes,
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
    if (!func) {
      return;
    }
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
    if (!script.arguments[0]) {
      return;
    }
    const functionName = execute(script.arguments[0], scopes);
    if (typeof functionName !== "string") {
      return;
    }
    object[functionName] = {
      type: "definedFunction",
      isKari: true,
      script,
    } as definedFunction;
    return;
  }
  if (callee === "while_kari") {
    if (!(script.arguments[0] && script.arguments[1])) {
      return;
    }
    let loopCount = 0;
    while (execute(script.arguments[0], scopes) && loopCount++ <= 10000) {
      execute(script.arguments[1], scopes);
    }
    return;
  }
  if (callee === "times" && !isNaN(Number(object)) && script.arguments[0]) {
    const body = script.arguments[0];
    let lastResult;
    for (let i = 0; i < Number(object); i++) {
      if (body.type === "LambdaExpression") {
        lastResult = execute(body.body, [{ "@0": i }, ...scopes]);
        continue;
      }
      lastResult = execute(body, [{ "@0": i }, ...scopes]);
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
      "scale",
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
    const args = argumentParser(script.arguments, scopes, ["then", "timer"], false);
    console.warn("[call expression] commentTrigger", script, args, scopes); //todo: feat commentTrigger
    return;
  }
  if (callee === "if") {
    const args = argumentParser(script.arguments, scopes, ["when", "then", "else"], false);
    const condition = execute(args.when, scopes);
    if (condition) {
      return execute(args.then, scopes);
    } else {
      return execute(args.else, scopes);
    }
  }
  if (callee === "timer") {
    const args = argumentParser(script.arguments, scopes, ["timer", "then"], false);
    args.then && addQueue(args.then, Number(execute(args.timer, scopes)), scopes);
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
    if (script.arguments[0]) {
      return rand(execute(script.arguments[0], scopes));
    }
    return rand();
  }
  if (callee === "distance") {
    const args = argumentParser(script.arguments, scopes, ["x1", "y1", "x2", "y2"]);
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
    const args = argumentParser(script.arguments, scopes, ["id", "x", "y", "width", "height", "visual", "volume"]);
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
    const args = argumentParser(script.arguments, scopes, ["match", "id", "button"]);
    return console.warn("[call expression] addPostRoute:", script, args); //todo: feat addPostRoute
  }
  if (callee === "CM") {
    const args = argumentParser(script.arguments, scopes, ["id", "time", "pause", "link", "volume"]);
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
    assign(script.arguments[0], resolve({ type: "Identifier", name: "@0" }, scopes), scopes);
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
      if (typeof left === "string") {
        return left.charAt(Number(right));
      }
      if (Array.isArray(left)) {
        return left[Number(right)];
      }
    } else if (callee === "indexOf") {
      const left = execute(script.callee.object, scopes);
      const right = execute(script.arguments[0], scopes);
      const offset = execute(script.arguments[1], scopes);
      if (typeof left !== "string") {
        console.error(
          "[call expression] String.indexOf: indexOf cannot be used for anything other than String",
          left,
          right,
          script,
          scopes,
        );
        return;
      }
      return offset === undefined ? left.indexOf(`${right}`) : left.indexOf(`${right}`, Number(offset));
    } else if (callee === "slice") {
      const left = execute(script.callee.object, scopes);
      const arg1 = Number(execute(script.arguments[0], scopes));
      if (typeof left !== "string") {
        console.error("[call expression] String.slice: slice cannot be used for anything other than String");
        return;
      }
      if (script.arguments[1]) {
        const arg2 = Number(execute(script.arguments[1], scopes));
        return left.slice(arg1, arg1 + arg2);
      }
      return left.slice(arg1);
    } else if (callee === "unshift") {
      const left = execute(script.callee.object, scopes);
      if (!Array.isArray(left)) {
        return left;
      }
      const args = script.arguments.map((arg) => execute(arg, scopes));
      return left.unshift(...args);
    } else if (callee === "push") {
      const left = execute(script.callee.object, scopes);
      if (!Array.isArray(left)) {
        return left;
      }
      const args = script.arguments.map((arg) => execute(arg, scopes));
      return left.push(...args);
    } else if (callee === "join") {
      const left = execute(script.callee.object, scopes);
      if (!Array.isArray(left)) {
        console.error("[call expression] Array.join: join cannot be used for anything other than Array");
        return;
      }
      const arg1 = execute(script.arguments[0], scopes);
      return left.join(`${arg1}`);
    } else if (callee === "setSlot") {
      const left = execute(script.callee.object, scopes);
      if (!typeGuard.object(left)) {
        console.error("[call expression] Object.setSlot: setSlot cannot be used for anything other than Object");
        return;
      }
      const key = execute(script.arguments[0], scopes) as string;
      const value = execute(script.arguments[1], scopes);
      return (left[key] = value);
    } else if (callee === "getSlot") {
      const left = execute(script.callee.object, scopes);
      if (!typeGuard.object(left)) {
        console.error("[call expression] Object.setSlot: setSlot cannot be used for anything other than Object");
        return;
      }
      const key = execute(script.arguments[0], scopes) as string;
      return left[key];
    } else if (callee === "alternative" || callee === "alt") {
      const args = argumentParser(script.arguments, scopes, ["then", "else"], false);
      const left = execute(script.callee.object, scopes);
      if (left && args.then) {
        return execute(args.then, scopes);
      } else if (!left && args.else) {
        return execute(args.else, scopes);
      }
      return;
    }
  }
  if (object?.[callee]) {
    const func = object[callee] as definedFunction;
    if (func.type !== "definedFunction") {
      return;
    }
    if (func.isKari) {
      const args: { [key: string]: unknown } = {};
      let count = 1;
      script.arguments.forEach((val) => {
        if (val?.NIWANGO_Identifier) {
          args[getName(val.NIWANGO_Identifier, scopes) as string] = execute(val, scopes);
        } else {
          args[`$${count++}`] = execute(val, scopes);
        }
      });
      return execute(func.script.arguments[1], [args, ...scopes]);
    } else {
      const argNames = func.script.arguments[0].arguments.map((arg) => getName(arg, scopes) as string);
      const args = argumentParser(script.arguments, scopes, argNames);
      return execute(func.script.arguments[1], [{ ...args, self: object }, object, ...scopes]);
    }
  }
  const self = execute({ type: "Identifier", name: "self" }, scopes) as { [key: string]: unknown };
  if (self?.[callee]) {
    const func = self[callee] as definedFunction;
    if (func.type !== "definedFunction") {
      return;
    }
    if (func.isKari) {
      const args: { [key: string]: unknown } = {};
      let count = 1;
      script.arguments.forEach((val) => {
        if (val?.NIWANGO_Identifier) {
          args[getName(val.NIWANGO_Identifier, scopes) as string] = execute(val, scopes);
        } else {
          args[`$${count++}`] = execute(val, scopes);
        }
      });
      return execute(func.script.arguments[1], [args, ...scopes]);
    } else {
      const argNames = func.script.arguments[0].arguments.map((arg) => getName(arg, scopes) as string);
      const args = argumentParser(script.arguments, scopes, argNames);
      return execute(func.script.arguments[1], [{ ...args }, ...scopes]);
    }
  }
  throw new NotImplementedError("CallExpression", script, scopes);
};

export { processCallExpression };
