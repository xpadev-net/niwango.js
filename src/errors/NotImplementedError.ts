class NotImplementedError extends Error {
  ASTName: string;
  ast: A_ANY;
  scopes: T_scope[];
  constructor(ASTName: string, ast: A_ANY, scopes: T_scope[], options: { [key: string]: unknown } = {}) {
    super("NotImplementedError", options);
    this.ASTName = ASTName;
    this.ast = ast;
    this.scopes = scopes;
  }
}
NotImplementedError.prototype.name = "NotImplementedError";
export { NotImplementedError };
