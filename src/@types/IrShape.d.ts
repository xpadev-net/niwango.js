import { IObjectOptions } from "@/@types/IrObject";

export type IShapeType = "circle" | "rect";
export type IShapeOptions = {
  shape: IShapeType;
  width: number;
  height: number;
  mask: boolean;
  commentmask: boolean;
  rotation: number;
} & IObjectOptions;
export type IShapeOptionsNullable = Partial<IShapeOptions>;
export type IShapeLiteral = {
  __NIWANGO_LITERAL: "IrObject";
  __type: "IrShape";
  options: IShapeOptions;
};
