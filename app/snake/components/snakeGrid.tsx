"use client";

import { useContext, useEffect, useState } from "react";
import { generateFood, moveSnake, handleKeyDown } from "../snakeUtils";
import { Point, Direction, GridCellProps } from "../types";
import {
  GameStatusContext,
  GameStatusContexType,
  ScoreContext,
  ScoreContextType,
} from "../providers";

const GridSize = 20;

const initSnake: Point[] = [
  { row: 10, col: 9 },
  { row: 10, col: 10 },
  { row: 10, col: 11 },
];

function GridCell({ isFood, isSnake }: GridCellProps) {
  return (
    <div
      className={`h-5 w-5 border border-slate-100 ${
        isFood ? "bg-red-400" : ""
      } ${isSnake ? "bg-green-600" : ""}`}
    ></div>
  );
}

export default function SnakeGrid() {
  const [snake, setSnake] = useState<Point[]>([]);
  const [food, setFood] = useState<Point>();
  const [direction, setDirection] = useState<Direction>("LEFT");

  const { incrementScore } = useContext(ScoreContext) as ScoreContextType;
  const { setGameOver } = useContext(GameStatusContext) as GameStatusContexType;

  useEffect(() => {
    setFood(generateFood(GridSize));
    setSnake(initSnake);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      moveSnake(
        snake,
        setSnake,
        food,
        setFood,
        direction,
        GridSize,
        setGameOver,
        incrementScore,
      );
    }, 180);
    return () => clearInterval(interval);
  }, [snake, direction, food]);

  return (
    <div
      onKeyDown={(event) => handleKeyDown(event, direction, setDirection)}
      className="grid grid-rows-20 border"
      tabIndex={0}
      autoFocus
    >
      {Array.from({ length: GridSize }).map((_, row) => {
        return (
          <div key={row} className="flex">
            {Array.from({ length: GridSize }).map((_, col) => {
              return (
                <GridCell
                  key={col}
                  isFood={food?.row === row && food?.col === col}
                  isSnake={snake.some((s) => s.row === row && s.col === col)}
                ></GridCell>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
