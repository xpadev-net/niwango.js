const time = new Date().getTime();
import { IrFunction } from "@/@types/core/functions";

const processPlayStartTime: IrFunction = () => {
  return time;
};

export { processPlayStartTime };
