import { config } from "@/definition/config";
import { isWide } from "@/context";
import { IrFunction } from "@/@types/core/functions";

const processScreenWidth: IrFunction = () => {
  return config.stageWidth[isWide ? "full" : "default"];
};

const processScreenHeight: IrFunction = () => {
  return config.stageHeight;
};

export { processScreenWidth, processScreenHeight };
