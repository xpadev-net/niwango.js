import type { A_ANY, T_scope } from "@/@types/ast";

/**
 * 予期していない型が渡された際に発生するエラー
 */
class InvalidTypeError extends Error {
  ASTName: string;
  ast: A_ANY;
  scopes: T_scope[];
  constructor(
    message: string,
    ast: A_ANY,
    scopes: T_scope[],
    options: { [key: string]: unknown } = {}
  ) {
    super("InvalidTypeError", options);
    this.message = message;
    this.ASTName = ast.type;
    this.ast = ast;
    this.scopes = scopes;
  }
}
InvalidTypeError.prototype.name = "InvalidTypeError";
export { InvalidTypeError };
