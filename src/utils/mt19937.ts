const N = 624.0,
  M = 397.0,
  MATRIX_A = 0x9908b0df,
  UPPER_MASK = 0x80000000,
  LOWER_MASK = 0x7fffffff;
let mti = N + 1;
const mt: number[] = [];

const __init_genrand = (seed: number): void => {
  //MethodID:392, LocalCount= 4 , MaxScope= 1, MaxStack= 7, CodeLength= 127
  mt[0] = seed & 0xffffffff;
  mti = 1;

  while (mti < N) {
    mt[mti] =
      0x6c078965 * ((mt[mti - 1] || 0) ^ ((mt[mti - 1] || 0) >>> 30)) + mti;
    mt[mti] &= 0xffffffff;
    mti++;
  }
};

const __init_by_array = (seed: number[], length: number) => {
  let key1 = 0,
    key2 = 1,
    range = N > length ? N : length;

  __init_genrand(0x012bd6aa);

  for (let i = 0; i < range; i++) {
    mt[key1] =
      ((mt[key1] || 0) ^
        (((mt[key1 - 1] || 0) ^ ((mt[key1 - 1] || 0) >>> 30)) * 0x0019660d)) +
      (seed[key2] || 0) +
      key2;
    mt[key1] &= 0xffffffff;
    key1++;
    key2++;

    if (key1 >= N) {
      mt[0] = mt[N - 1] || 0;
      key1 = 1;
    }

    if (key2 >= length) key2 = 0;
  }

  range = N - 1;

  for (let i = 0; i < range; i++) {
    mt[key1] =
      ((mt[key1] || 0) ^
        (((mt[key1 - 1] || 0) ^ ((mt[key1 - 1] || 0) >>> 30)) * 0x5d588b65)) -
      key1;
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
  var result: number = NaN;
  var key: number = NaN;
  var index: number[] = [0, MATRIX_A];

  if (mti >= N) {
    if (mti == N + 1) __init_genrand(5489);

    key = 0;

    while (key < N - M) {
      result =
        ((mt[key] || 0) & UPPER_MASK) | ((mt[key + 1] || 0) & LOWER_MASK);
      mt[key] = (mt[key + M] || 0) ^ (result >>> 1) ^ (index[result & 1] || 0);
      key++;
    }

    while (key < N - 1) {
      result =
        ((mt[key] || 0) & UPPER_MASK) | ((mt[key + 1] || 0) & LOWER_MASK);
      mt[key] =
        (mt[key + M - N] || 0) ^ (result >>> 1) ^ (index[result & 1] || 0);
      key++;
    }

    result = ((mt[N - 1] || 0) & UPPER_MASK) | ((mt[0] || 0) & LOWER_MASK);
    mt[N - 1] = (mt[M - 1] || 0) ^ (result >>> 1) ^ (index[result & 1] || 0);
    mti = 0;
  }

  result = mt[mti++] || 0;
  result ^= result >>> 11;
  result ^= (result << 7) & 0x9d2c5680;
  result ^= (result << 15) & 0xefc60000;
  result ^= result >>> 18;
  return result;
};
const mt19937 = (seed: number): number => {
  __init_by_array([seed], 1);
  return __genrand_int32();
};
export { mt19937 };
