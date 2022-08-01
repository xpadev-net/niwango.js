const makeIdentifier = (name: string): A_Identifier => {
  return {
    type: "Identifier",
    name: name,
  } as A_Identifier;
};
const makeLiteral = (value: string): A_Literal => {
  return {
    type: "Literal",
    value: value,
  } as A_Literal;
};
export default { makeIdentifier, makeLiteral };
