/**
 * lambda式を生成する
 * @param callee
 * @param script
 */
const convert2lambda = (callee: string, script: A_CallExpression): A_Lambda => {
  return {
    type: "CallExpression",
    callee: {
      type: "Identifier",
      name: "\\",
    },
    arguments: [
      {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: callee.replace(/^\\/, ""),
        },
        arguments: script.arguments,
        NIWANGO_Identifier: undefined,
      },
    ],
  };
};
export { convert2lambda };
