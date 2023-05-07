/**
 * 掛け算処理
 * 文字列に数値を掛けた場合は、文字列を繰り返す
 * @param left
 * @param right
 */
const Multiplication = (left: unknown, right: unknown) => {
  if (typeof left === "string") {
    return left.repeat(Number(right));
  }
  return Number(left) * Number(right);
};

/**
 * 引き算処理
 * @param left
 * @param right
 */
const Subtraction = (left: unknown, right: unknown) => {
  return Number(left) - Number(right);
};

/**
 * 足し算処理
 * @param left
 * @param right
 */
const Addition = (left: unknown, right: unknown) => {
  if (typeof left === "string" || typeof right === "string") {
    return `${left}${right}`;
  }
  return Number(left) + Number(right);
};

/**
 * 比較処理 <
 * @param left
 * @param right
 * @constructor
 */
const LessThan = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string") {
    return left < right;
  }
  return Number(left) < Number(right);
};

/**
 * 比較処理 >
 * @param left
 * @param right
 * @constructor
 */
const GreaterThan = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string") {
    return left > right;
  }
  return Number(left) > Number(right);
};

/**
 * 比較処理 <=
 * @param left
 * @param right
 * @constructor
 */
const LessThanOrEqual = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string") {
    return left <= right;
  }
  return Number(left) <= Number(right);
};

/**
 * 比較処理 >=
 * @param left
 * @param right
 * @constructor
 */
const GreaterThanOrEqual = (left: unknown, right: unknown) => {
  if (typeof left === "string" && typeof right === "string") {
    return left >= right;
  }
  return Number(left) >= Number(right);
};

/**
 * 割り算処理
 * @param left
 * @param right
 * @constructor
 */
const Division = (left: unknown, right: unknown) => {
  return Number(left) / Number(right);
};

/**
 * あまり計算
 * @param left
 * @param right
 * @constructor
 */
const Remainder = (left: unknown, right: unknown) => {
  return Number(left) % Number(right);
};

/**
 * べき乗処理
 * @param left
 * @param right
 * @constructor
 */
const Exponentiation = (left: unknown, right: unknown) => {
  return Number(left) ** Number(right);
};

/**
 * ビット演算 AND
 * @param left
 * @param right
 * @constructor
 */
const BitwiseAND = (left: unknown, right: unknown) => {
  return Number(left) & Number(right);
};

/**
 * ビット演算 OR
 * @param left
 * @param right
 * @constructor
 */
const BitwiseOR = (left: unknown, right: unknown) => {
  return Number(left) | Number(right);
};

/**
 * ビット演算 XOR
 * @param left
 * @param right
 * @constructor
 */
const BitwiseXOR = (left: unknown, right: unknown) => {
  return Number(left) ^ Number(right);
};

/**
 * ビット演算 NOT
 * @param value
 * @constructor
 */
const BitwiseNOT = (value: unknown) => {
  return ~Number(value);
};

/**
 * 左シフト
 * @param left
 * @param right
 * @constructor
 */
const LeftShift = (left: unknown, right: unknown) => {
  return Number(left) << Number(right);
};

/**
 * 右シフト
 * @param left
 * @param right
 * @constructor
 */
const RightShift = (left: unknown, right: unknown) => {
  return Number(left) >> Number(right);
};

/**
 * 符号なし右シフト
 * @param left
 * @param right
 * @constructor
 */
const UnsignedRightShift = (left: unknown, right: unknown) => {
  return Number(left) >>> Number(right);
};

/**
 * 単項演算子 -
 * @param value
 * @constructor
 */
const UnaryNegation = (value: unknown) => {
  return -Number(value);
};

/**
 * 単項演算子 +
 * @param value
 * @constructor
 */
const UnaryPlus = (value: unknown) => {
  return Number(value);
};

/**
 * 理論否定
 * @param value
 * @constructor
 */
const LogicalNot = (value: unknown) => {
  return !value;
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
  BitwiseNOT,
  LeftShift,
  RightShift,
  UnsignedRightShift,
  UnaryNegation,
  UnaryPlus,
  LogicalNot,
};
