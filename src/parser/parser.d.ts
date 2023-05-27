import { A_ANY } from "@/@types/ast";

/**
 * ニワン語をASTに変換するパーサー
 * @param script
 * @param options 設定
 * @returns
 */
export function parse(
  script: string,
  options?: Partial<{ grammarSource: string }>
): A_ANY;

/**
 * パースエラーが発生した際に投げられるエラー?
 * 多分型はあってるはず
 */
export class SyntaxError extends Error {
  constructor(
    message: string,
    expected: string,
    found: string,
    location: string
  );
  expected: string;
  found: string;
  location: {
    start: { offset: number; line: number; column: number };
    end: { offset: number; line: number; column: number };
    source: string;
  };
  name: "SyntaxError";
  format: (sources: { source: string; text: string }[]) => string;
}
