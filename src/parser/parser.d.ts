export function parse(script: string): A_ANY;
export class SyntaxError extends Error {
  constructor(message: string, expected: string, found: string, location: string);
  expected: string;
  found: string;
  location: string;
  name: "SyntaxError";
}
