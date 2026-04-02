import type { Comment } from "./@types/comment";
import type { IShapeLiteral } from "./@types/IrShape";
import type { ITextLiteral } from "./@types/IrText";
declare const typeGuard: {
    comment: (i: unknown) => i is Comment;
    IrTextLiteral: (i: unknown) => i is ITextLiteral;
    IrShapeLiteral: (i: unknown) => i is IShapeLiteral;
};
export default typeGuard;
