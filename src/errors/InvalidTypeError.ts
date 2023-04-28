class InvalidTypeError extends Error {
  ASTName: string;
  ast: A_ANY;
  scopes: T_scope[];
  constructor(
    message: string,
    ASTName: string,
    ast: A_ANY,
    scopes: T_scope[],
    options: { [key: string]: unknown } = {},
  ) {
    super("InvalidTypeError", options);
    this.message = message;
    this.ASTName = ASTName;
    this.ast = ast;
    this.scopes = scopes;
  }
}
InvalidTypeError.prototype.name = "InvalidTypeError";
export { InvalidTypeError };
