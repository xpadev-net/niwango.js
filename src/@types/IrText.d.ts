export type commentFlashFont = "defont" | "gulim" | "simsun";
export type commentContentItem = {
  content: string;
  font?: commentFlashFont;
  width?: number[];
};
export type commentContentIndex = {
  index: number;
  font: "gothic" | "gulim" | "simsunStrong" | "simsunWeak";
};
export type commentFont = "defont" | "gulim" | "simsun";
