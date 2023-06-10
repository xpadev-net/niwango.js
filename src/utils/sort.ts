/**
 * オブジェクトの配列を指定したキーでソートする
 * @param key
 */
const nativeSort = <T extends { [key: string]: unknown }>(key: string) => {
  return (a: T, b: T) => {
    const left = a[key] || 0;
    const right = b[key] || 0;
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };
};

export { nativeSort };
