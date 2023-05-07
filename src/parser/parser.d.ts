/**
 * ニワン語をASTに変換するパーサー
 * @param {string} script
 * @returns {A_ANY}
 */
export function parse(script: string): A_ANY;

/**
 * パースエラーが発生した際に投げられるエラー?
 * 多分型はあってるはず
 */
export class SyntaxError extends Error {
  constructor(message: string, expected: string, found: string, location: string);
  expected: string;
  found: string;
  location: string;
  name: "SyntaxError";
}
