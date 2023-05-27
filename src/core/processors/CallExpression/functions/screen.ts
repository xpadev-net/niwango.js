import { config } from "@/definition/config";
import { isWide } from "@/context";

const processScreenWidth = () => {
  return config.stageWidth[isWide ? "full" : "default"];
};

const processScreenHeight = () => {
  return config.stageHeight;
};

export { processScreenWidth, processScreenHeight };
