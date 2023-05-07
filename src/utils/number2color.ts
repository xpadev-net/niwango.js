/**
 * 10進数のカラコを16進数に変換する
 * @param input
 */
const number2color = (input: number) => {
  const hex = `000000${input.toString(16)}`.slice(-6);
  return `#${hex}`;
};
export { number2color };
