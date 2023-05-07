import { getValue } from "@/utils/utils";

const N = 624;
const M = 397;
const MATRIX_A = 0x9908b0df;
const UPPER_MASK = 0x80000000;
const LOWER_MASK = 0x7fffffff;
let mti = N + 1;
const mt: number[] = [];

const __init_genrand = (seed: number): void => {
  mt[0] = seed & 0xffffffff;
  mti = 1;

  while (mti < N) {
    mt[mti] = 0x6c078965 * ((mt[mti - 1] || 0) ^ ((mt[mti - 1] || 0) >>> 30)) + mti;
    mt[mti] &= 0xffffffff;
    mti++;
  }
};

const __init_by_array = (seed: number[], length: number) => {
  let key1 = 0;
  let key2 = 1;
  let range = Math.max(N, length);

  __init_genrand(0x012bd6aa);

  for (let i = 0; i < range; i++) {
    const value = getNumber(mt[key1]);
    const lastValue = getNumber(mt[key1 - 1]);
    mt[key1] = (value ^ ((lastValue ^ (lastValue >>> 30)) * 0x0019660d)) + (seed[key2] || 0) + key2;
    mt[key1] &= 0xffffffff;
    key1++;
    key2++;

    if (key1 >= N) {
      mt[0] = mt[N - 1] || 0;
      key1 = 1;
    }

    if (key2 >= length) {
      key2 = 0;
    }
  }

  range = N - 1;

  for (let i = 0; i < range; i++) {
    const value = getNumber(mt[key1]);
    const lastValue = getNumber(mt[key1 - 1]);
    mt[key1] = (value ^ ((lastValue ^ (lastValue >>> 30)) * 0x5d588b65)) - key1;
    mt[key1] &= 0xffffffff;
    key1++;

    if (key1 >= N) {
      mt[0] = mt[N - 1] || 0;
      key1 = 1;
    }
  }
  mt[0] = 0x80000000;
};
const __genrand_int32 = (): number => {
  let result: number;

  if (mti >= N) {
    if (mti === N + 1) {
      __init_genrand(5489);
    }

    let key = 0;
    const index: number[] = [0, MATRIX_A];

    while (key < N - M) {
      result = (getNumber(mt[key]) & UPPER_MASK) | (getNumber(mt[key + 1]) & LOWER_MASK);
      mt[key] = getNumber(mt[key + M]) ^ (result >>> 1) ^ getNumber(index[result & 1]);
      key++;
    }

    while (key < N - 1) {
      result = (getNumber(mt[key]) & UPPER_MASK) | (getNumber(mt[key + 1]) & LOWER_MASK);
      mt[key] = getNumber(mt[key + M - N]) ^ (result >>> 1) ^ getNumber(index[result & 1]);
      key++;
    }

    result = (getNumber(mt[N - 1]) & UPPER_MASK) | (getNumber(mt[0]) & LOWER_MASK);
    mt[N - 1] = getNumber(mt[M - 1]) ^ (result >>> 1) ^ getNumber(index[result & 1]);
    mti = 0;
  }

  result = getNumber(mt[mti++]);
  result ^= result >>> 11;
  result ^= (result << 7) & 0x9d2c5680;
  result ^= (result << 15) & 0xefc60000;
  result ^= result >>> 18;
  return result;
};

const getNumber = (input: number | undefined) => {
  return getValue(input, 0);
};

/**
 * mt19937の乱数を生成
 * @param seed
 */
const mt19937 = (seed: number): number => {
  __init_by_array([seed], 1);
  return __genrand_int32();
};
export { mt19937 };
