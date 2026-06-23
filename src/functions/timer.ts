import Core, {
  type A_ANY,
  type A_CallExpression,
  type IrFunction,
  type T_scope,
} from "@xpadev-net/niwango-core";

import { addQueue } from "@/contexts/queue";

const hasObjectShape = (input: unknown): input is Record<string, unknown> =>
  typeof input === "object" && input !== null;

const hasAstShape = (input: unknown): input is A_ANY => {
  if (!hasObjectShape(input) || typeof input.type !== "string") {
    return false;
  }

  const hasAstListShape = (list: unknown): list is A_ANY[] =>
    Array.isArray(list) && list.every(hasAstShape);

  if (
    input.NIWANGO_Identifier !== undefined &&
    input.NIWANGO_Identifier !== null &&
    !hasAstShape(input.NIWANGO_Identifier)
  ) {
    return false;
  }

  switch (input.type) {
    case "Identifier":
      return typeof input.name === "string";
    case "Literal":
      return (
        input.value === null ||
        typeof input.value === "boolean" ||
        typeof input.value === "number" ||
        typeof input.value === "string"
      );
    case "ExpressionStatement":
      return hasAstShape(input.expression);
    case "AssignmentExpression":
      return (
        typeof input.operator === "string" &&
        hasAstShape(input.left) &&
        hasAstShape(input.right)
      );
    case "ArrayExpression":
      return hasAstListShape(input.elements);
    case "ArrowFunctionExpression":
      return hasAstShape(input.body) && input.body.type === "BlockStatement";
    case "BinaryExpression":
    case "LogicalExpression":
      return (
        typeof input.operator === "string" &&
        hasAstShape(input.left) &&
        hasAstShape(input.right)
      );
    case "BlockStatement":
    case "Program":
      return hasAstListShape(input.body);
    case "CallExpression":
      return hasAstShape(input.callee) && hasAstListShape(input.arguments);
    case "IfStatement":
      return hasAstShape(input.test);
    case "LambdaExpression":
      return (
        hasAstShape(input.body) &&
        input.body.type === "BlockStatement" &&
        (input.scopes === undefined || Array.isArray(input.scopes))
      );
    case "MemberExpression":
      return (
        hasAstShape(input.object) &&
        hasAstShape(input.property) &&
        typeof input.computed === "boolean"
      );
    case "ObjectExpression":
      return hasAstListShape(input.properties);
    case "Property":
      return hasAstShape(input.key) && hasAstShape(input.value);
    case "SequenceExpression":
      return hasAstListShape(input.expressions);
    case "UnaryExpression":
    case "UpdateExpression":
      return (
        typeof input.operator === "string" &&
        typeof input.prefix === "boolean" &&
        hasAstShape(input.argument)
      );
    case "VariableDeclaration":
      return (
        Array.isArray(input.declarations) &&
        input.declarations.every(hasAstShape) &&
        typeof input.kind === "string"
      );
    case "VariableDeclarator":
      return (
        hasAstShape(input.id) &&
        (input.init === null || hasAstShape(input.init))
      );
    case "EmptyStatement":
      return true;
    case "Raw":
      return "value" in input;
    default:
      return false;
  }
};

const processTimer: IrFunction = (
  script: A_CallExpression,
  scopes: T_scope[],
  _,
  trace: A_ANY[],
) => {
  const args = Core.utils.argumentParser(
    script.arguments,
    scopes,
    ["timer", "then"],
    trace,
    false,
  );
  if (!hasAstShape(args.then)) {
    return;
  }

  const offset = Number(Core.execute(args.timer, scopes, trace));
  if (Number.isFinite(offset)) {
    addQueue(args.then, offset, scopes, [...trace]);
  }
};

export { processTimer };
