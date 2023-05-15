/**
 * 10進数のカラコを16進数に変換する
 * @param input
 */
const number2color = (input: number) => {
  const hex = `000000${input.toString(16)}`.slice(-6);
  return `#${hex}`;
};

const color2number = (input: string) => {
  const hex = input.replace("#", "");
  return parseInt(hex, 16);
};

export { number2color, color2number };
