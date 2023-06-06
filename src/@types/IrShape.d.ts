import { IObjectOptions } from "@/@types/IrObject";

type IShapeType = "circle" | "rect";
type IShapeOptions = {
  shape: IShapeType;
  width: number;
  height: number;
  mask: boolean;
  commentmask: boolean;
  rotation: number;
} & IObjectOptions;
type IShapeOptionsNullable = Partial<IShapeOptions>;
