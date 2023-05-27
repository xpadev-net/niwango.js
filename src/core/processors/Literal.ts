import { A_Literal } from "@/@types/ast";

const processLiteral = (script: A_Literal) => {
  return script.value;
};

export { processLiteral };
