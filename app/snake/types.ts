type Point = {
  row: number;
  col: number;
};

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

type GridCellProps = {
  isFood: boolean;
  isSnake: boolean;
};

export type { Point, Direction, GridCellProps };
