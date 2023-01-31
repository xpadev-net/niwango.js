const navieSort = <T>(key: string) => {
  return (a: { [x: string]: T }, b: { [x: string]: T }) => {
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

export { navieSort };
