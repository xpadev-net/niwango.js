import { Comment } from "@/@types/comment";
import { IShapeLiteral } from "@/@types/IrShape";
import { ITextLiteral } from "@/@types/IrText";
import { IrObject } from "@/objects/object";

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
    typeof i === "object" &&
    !!i &&
    (i as ITextLiteral).__NIWANGO_LITERAL === "IrObject" &&
    (i as ITextLiteral).__type === "IrText" &&
    !(i instanceof IrObject),
  IrShapeLiteral: (i: unknown): i is IShapeLiteral =>
    typeof i === "object" &&
    !!i &&
    (i as IShapeLiteral).__NIWANGO_LITERAL === "IrObject" &&
    (i as IShapeLiteral).__type === "IrShape" &&
    !(i instanceof IrObject),
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
