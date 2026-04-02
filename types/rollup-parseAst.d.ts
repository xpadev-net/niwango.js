declare module "rollup/parseAst" {
  interface ParseAstOptions {
    allowReturnOutsideFunction?: boolean;
    jsx?: boolean;
    signal?: AbortSignal;
  }

  export function parseAst(
    input: string,
    options?: ParseAstOptions,
  ): unknown;
  export function parseAstAsync(
    input: string,
    options?: ParseAstOptions,
  ): Promise<unknown>;
}
