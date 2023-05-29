import { IrFunction } from "@/@types/core/functions";
import { isWide } from "@/context";
import { config } from "@/definition/config";

const processScreenWidth: IrFunction = () => {
  return config.stageWidth[isWide ? "full" : "default"];
};

const processScreenHeight: IrFunction = () => {
  return config.stageHeight;
};

export { processScreenHeight, processScreenWidth };
