import typeGuard from "@/typeGuard";

const execute = (script: A_ANY, scopes: T_scope[]) => {
  try {
    if (!script) return;
    if (typeGuard.ExpressionStatement(script)) {
      execute(script.expression, scopes);
    } else if (typeGuard.AssignmentExpression(script)) {
      if (script.operator === "=") {
        assign(script.left, execute(script.right, scopes), scopes);
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
      } else if (script.operator === "+=") {
        const result = left + execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      } else if (script.operator === "+=") {
        const result = left - execute(script.right, scopes);
        assign(script.left, result, scopes);
        return result;
      } else if (script.operator === "+") {
        return left + right;
      } else if (script.operator === "-") {
        return left - right;
      } else {
        console.warn("unknown binary expression:", script, scopes);
      }
    } else if (typeGuard.BlockStatement(script)) {
      for (let item of script.body) {
        execute(item, scopes);
      }
    } else if (typeGuard.CallExpression(script)) {
      console.log("CallExpression:", script, scopes);
      if (script.callee?.name === "dump") {
        console.log(execute(script.arguments[0], scopes));
      }
    } else if (typeGuard.IfStatement(script)) {
      let test = execute(script.test, scopes);
      console.log("ifstate:", script.test, test, script, scopes);
    } else if (typeGuard.Identifier(script)) {
      return resolve(script, scopes);
    } else if (typeGuard.Literal(script)) {
      return script.value;
    } else if (typeGuard.MemberExpression(script)) {
      console.log("MemberExpression:", script, scopes);
      const left = execute(script.object, scopes);
      console.log(left);
      return left[getName(script.property, scopes)];
    } else if (typeGuard.ObjectExpression(script)) {
      const object: { [key: string | number | symbol]: unknown } = {};
      for (const item of script.properties) {
        object[getName(item.key, scopes)] = execute(item.value, scopes);
      }
      console.log(object);
      return object;
    } else if (typeGuard.Program(script)) {
      for (let item of script.body) {
        execute(item, scopes);
      }
    } else if (typeGuard.UpdateExpression(script)) {
      console.log("UpdateExpression:", script, scopes);
    } else if (typeGuard.VariableDeclaration(script)) {
      console.log("VariableDeclaration:", script, scopes);
    } else {
      console.log("unknown", script, scopes);
    }
    /*switch (script.type) {
      case "CallExpression":
        let callee = execute(script.callee, options),args;
        if (callee.type !== "Identifier") {
          console.warn("invalid identifier:", script, options)
          break;
        }
        switch (callee.raw) {
          case "def_kari":
            this.functions[execute(script.arguments[0], options).raw] = script.arguments[1];
            console.info("define:", execute(script.arguments[0], options).raw);
            break;
          case "drawText":
          case "dt":
            args = executeArg({
              text: null,
              x: null,
              y: null,
              z: null,
              size: null,
              pos: null,
              color: null,
              bold: null,
              visible: null,
              filter: null,
              alpha: null,
              mover: null
            }, script.arguments, options);
            console.log("[drawText] text:", args, script.arguments);
            let DrawText = {
              type: "DrawText",
              ...args
            }
            arrayPush(this.timeline,this.last_vpos,DrawText);
            return DrawText;
          case "drawShape":
            args = executeArg({
              x: null,
              y: null,
              z: null,
              shape: null,
              width: null,
              height: null,
              color: null,
              visible: null,
              pos: null,
              mask: null,
              commentmask: null,
              alpha: null,
              rotation: null,
              mover: null
            }, script.arguments, options);
            console.log("[DrawShape] shape:", args, script.arguments);
            let DrawShape = {
              type: "DrawShape",
              ...args
            }
            arrayPush(this.timeline,this.last_vpos,DrawShape);
            return DrawShape;
          case "rand":
            if (script.arguments[0].raw){
              let num = 0,str = script.arguments[0].raw;
              for (let i = 0; i < str.length; ++i) {
                num+=str.charCodeAt(i);
              }
              return num;
            }
            return Math.round(Math.random()*100000);
          case "timer":
            console.info("called timer:", script);
            arrayPush(this.scripts, this.last_vpos + getByName(script.arguments, "timer") * 100, getByName(script.arguments, "default0"));
            break;
          case "ZEN::loop":
            console.info("ZEN::loop:", script,callee.count);
            for (let i = 0; i < callee.count; i++) {
              execute(script.arguments[0], {argument: {...options.argument,tmp0:i}, root: false});
            }
            break;
          case "@":
            //todo: @関数実装(引数にtmpを代入)
            break;
          default:
            if (this.functions[callee.raw]) {
              console.info("called func:", callee, "func:", this.functions[callee.raw], "args:", script.arguments);
              execute(this.functions[callee], {...options, argument: script.arguments});
            } else {
              console.warn("unknown func:", execute(script.callee), script, "funcs:", this.functions);
            }
        }
        break;
      case "EmptyStatement":
        return;
      case "IfStatement":
        let test = execute(script.test, options);
        console.log("ifstate:", script.test, test, script, options);
        break;
      case "Identifier":
        let arg = getByName(options.argument, script.name);
        if (script.name.match(/^\$|@/)) console.info("parse args:", options.argument, script.name, arg)
        if (arg !== false) {
          return execute(arg, options);
        }
        return {
          type: "Identifier",
          raw: script.name
        };
      case "Literal":
        return {
          type: "Literal",
          raw: unQuote(script.value)
        };
      case "MemberExpression":
        let left = execute(script.object, options), right = execute(script.property, options);
        if (left?.type.match(/Literal|Identifier/))left = left.raw;
        if (right?.type.match(/Literal|Identifier/))right = right.raw;
        if (typeof left !== "object") {
          if (typeof left === "number" && right === "times") {
            return {
              type: "Identifier",
              raw: "ZEN::loop",
              count: left
            }
          } else if (right === "indexOf") {
            return {
              type: "Identifier",
              raw: "indexOf",
              target: execute(left, options)
            }
          }
          if (!this.variable[left]) {
            console.warn("undefined left:", left, right, script);
            break;
          }
          return this.variable[left][right];
        }
        return left[right];
      case "Program":
        for (let item of script.body){
          execute(item);
        }
        break;
      case "UpdateExpression":
        console.warn("unknown update expression:", script, options);
        break;
      case "VariableDeclaration":
        for (let item of script.declarations) {
          let left = execute(item.id, options), right = execute(item.init, options);
          if (typeof left === "string") {
            this.variable[left] = right;
          } else {
            left = right;
          }
          console.info("init var:", left, right, item);
        }
        break;
      default:
        console.warn("unknown:", script);
    }*/
  } catch (e) {
    console.error(e.name + ": " + e.message, script);
  }
};

const resolve = (script: A_ANY, scopes: T_scope[]) => {
  if (typeGuard.Identifier(script)) {
    for (const scope of scopes) {
      if (scope[script.name]) {
        return scope[script.name];
      }
    }
  }
};
const assign = (target: A_ANY, value: unknown, scopes: T_scope[]) => {
  if (scopes.length < 1) return;
  if (typeGuard.Identifier(target)) {
    for (const scope of scopes) {
      if (scope[target.name]) {
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

export default execute;
