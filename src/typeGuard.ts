import type { Comment } from "@/@types/comment";
import type { IShapeLiteral } from "@/@types/IrShape";
import type { ITextLiteral } from "@/@types/IrText";
import { IrObject } from "@/objects/object";

type PrimitiveTypeName = "boolean" | "number" | "string";
type RecordValue = Record<string, unknown>;

const textOptionTypes = {
  text: "string",
  x: "number",
  y: "number",
  z: "number",
  size: "number",
  pos: "string",
  posX: "string",
  posY: "string",
  color: "number",
  bold: "boolean",
  visible: "boolean",
  scale: "number",
  filter: "string",
  alpha: "number",
  mover: "string",
} satisfies Record<
  Exclude<keyof ITextLiteral["options"], "__id">,
  PrimitiveTypeName
>;

const shapeOptionTypes = {
  x: "number",
  y: "number",
  z: "number",
  shape: "string",
  width: "number",
  height: "number",
  pos: "string",
  posX: "string",
  posY: "string",
  color: "number",
  visible: "boolean",
  mask: "boolean",
  commentmask: "boolean",
  scale: "number",
  alpha: "number",
  rotation: "number",
  mover: "string",
} satisfies Record<
  Exclude<keyof IShapeLiteral["options"], "__id">,
  PrimitiveTypeName
>;

const typeGuard = {
  comment: (i: unknown): i is Comment =>
    objectVerify(i, [
      "message",
      "vpos",
      "isYourPost",
      "mail",
      "fromButton",
      "isPremium",
      "color",
      "size",
      "no",
      "_vpos",
      "_owner",
    ]),
  IrTextLiteral: (i: unknown): i is ITextLiteral =>
    isLiteralObject(i, "IrText") && objectHasTypes(i.options, textOptionTypes),
  IrShapeLiteral: (i: unknown): i is IShapeLiteral =>
    isLiteralObject(i, "IrShape") &&
    objectHasTypes(i.options, shapeOptionTypes),
};

const isRecord = (item: unknown): item is RecordValue =>
  typeof item === "object" && item !== null && !Array.isArray(item);

const isLiteralObject = (
  item: unknown,
  type: IShapeLiteral["__type"] | ITextLiteral["__type"],
): item is RecordValue & {
  __NIWANGO_LITERAL: "IrObject";
  __type: typeof type;
  options: unknown;
} =>
  isRecord(item) &&
  item.__NIWANGO_LITERAL === "IrObject" &&
  item.__type === type &&
  !(item instanceof IrObject);

const objectHasTypes = (
  item: unknown,
  properties: Record<string, PrimitiveTypeName>,
): item is RecordValue => {
  if (!isRecord(item)) {
    return false;
  }
  for (const [key, type] of Object.entries(properties)) {
    if (
      !Object.prototype.hasOwnProperty.call(item, key) ||
      typeof item[key] !== type
    ) {
      return false;
    }
  }
  if (
    Object.prototype.hasOwnProperty.call(item, "__id") &&
    typeof item.__id !== "string"
  ) {
    return false;
  }
  return true;
};

const objectVerify = (item: unknown, keys: string[]): boolean => {
  if (typeof item !== "object" || !item) {
    return false;
  }
  for (const key of keys) {
    if (!Object.prototype.hasOwnProperty.call(item, key)) {
      return false;
    }
  }
  return true;
};
export default typeGuard;
