
type formattedComment = {
  id: number;
  vpos: number;
  content: string;
  date: number;
  date_usec: number;
  owner: boolean;
  premium: boolean;
  mail: string[];
  user_id: number;
  layer: number;
};
type ITextFilter = ""|"fuchi"|"kasumi"|"kage";
type ITextMover = ""|"smooth"|"simple"|"rolling"|"hopping";
type ITextOptions = {
  text: string;
  x: number;
  y: number;
  z: number;
  size: number;
  pos: string;
  color: number;
  bold: boolean;
  visible: boolean;
  filter: ITextFilter;
  alpha: number;
  mover: ITextMover;
}
type ITextOptionsNullable = {
  text?: string;
  x?: number;
  y?: number;
  z?: number;
  size?: number;
  pos?: string;
  color?: number;
  bold?: boolean;
  visible?: boolean;
  filter?: ITextFilter;
  alpha?: number;
  mover?: ITextMover;
}