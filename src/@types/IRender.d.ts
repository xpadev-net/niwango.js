export type DrawOptions = DrawOptionA | DrawOptionB;

export type DrawOptionA = {
  baseX: number;
  baseY: number;
  baseWidth: number;
  baseHeight: number;
  targetX: number;
  targetY: number;
  targetWidth: number;
  targetHeight: number;
  rotate?: number;
};

export type DrawOptionB = {
  targetX: number;
  targetY: number;
  rotate?: number;
};

export interface IRender {
  apply(): void;
  clear(): void;
  drawImage(image: HTMLCanvasElement, options: DrawOptions): void;
}
