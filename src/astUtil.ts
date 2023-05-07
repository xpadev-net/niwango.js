/**
 * 名前からIdentifierを生成する
 * @param name
 */
const makeIdentifier = (name: string): A_Identifier => {
  return {
    type: "Identifier",
    name: name,
  } as A_Identifier;
};
/**
 * 値からLiteralを生成する
 * @param value
 */
const makeLiteral = (value: string): A_Literal => {
  return {
    type: "Literal",
    value: value,
  } as A_Literal;
};
export { makeIdentifier, makeLiteral };
