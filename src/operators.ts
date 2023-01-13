const Multiplication = (left: unknown, right: unknown) => {
  return Number(left) * Number(right);
};

const Subtraction = (left: unknown, right: unknown) => {
  return Number(left) - Number(right);
};

const Addition = (left: unknown, right: unknown) => {
  if (typeof left === "string" || typeof right === "string")
    return `${left}${right}`;
  return Number(left) + Number(right);
};

const LessThan = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string")
    return left < right;
  return Number(left) < Number(right);
};

const GreaterThan = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string")
    return left > right;
  return Number(left) > Number(right);
};

const LessThanOrEqual = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string")
    return left <= right;
  return Number(left) <= Number(right);
};

const GreaterThanOrEqual = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string")
    return left >= right;
  return Number(left) >= Number(right);
};

const Division = (left: unknown, right: unknown) => {
  return Number(left) / Number(right);
};

const Remainder = (left: unknown, right: unknown) => {
  return Number(left) % Number(right);
};

const Exponentiation = (left: unknown, right: unknown) => {
  return Number(left) ** Number(right);
};

const BitwiseAND = (left: unknown, right: unknown) => {
  return Number(left) & Number(right);
};

const BitwiseOR = (left: unknown, right: unknown) => {
  return Number(left) | Number(right);
};

const BitwiseXOR = (left: unknown, right: unknown) => {
  return Number(left) ^ Number(right);
};

const LeftShift = (left: unknown, right: unknown) => {
  return Number(left) << Number(right);
};

const RightShift = (left: unknown, right: unknown) => {
  return Number(left) >> Number(right);
};

const UnsignedRightShift = (left: unknown, right: unknown) => {
  return Number(left) >>> Number(right);
};

export {
  Multiplication,
  Subtraction,
  Addition,
  LessThan,
  GreaterThan,
  LessThanOrEqual,
  GreaterThanOrEqual,
  Division,
  Remainder,
  Exponentiation,
  BitwiseAND,
  BitwiseOR,
  BitwiseXOR,
  LeftShift,
  RightShift,
  UnsignedRightShift,
};
