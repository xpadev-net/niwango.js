const number2color = (input: number) => {
  return `#${`000000${input.toString(16)}`.slice(-6)}`;
};
export { number2color };
