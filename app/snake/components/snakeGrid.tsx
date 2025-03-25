"use client";

import { useEffect, useState, type KeyboardEvent } from "react";

const GridSize = 20;

type Point = {
  row: number;
  col: number;
};

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const initSnake: Point[] = [
  { row: 10, col: 9 },
  { row: 10, col: 10 },
  { row: 10, col: 11 },
];

export default function SnakeGrid() {
  const [snake, setSnake] = useState<Point[]>([]);
  const [food, setFood] = useState<Point>();
  const [direction, setDirection] = useState<Direction>("LEFT");

  const generateFood = () => {
    const x = Math.floor(Math.random() * GridSize);
    const y = Math.floor(Math.random() * GridSize);
    setFood({ row: x, col: y });
  };

  useEffect(() => {
    generateFood();
    setSnake(initSnake);
  }, []);

  useEffect(() => {
    const interval = setInterval(move, 180);
    return () => clearInterval(interval);
  }, [snake, direction]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>): void {
    switch (event.key) {
      case "ArrowUp":
        if (direction != "DOWN") {
          setDirection("UP");
        }
        break;
      case "ArrowDown":
        if (direction != "UP") {
          setDirection("DOWN");
        }
        break;
      case "ArrowLeft":
        if (direction != "RIGHT") {
          setDirection("LEFT");
        }
        break;
      case "ArrowRight":
        if (direction != "LEFT") {
          setDirection("RIGHT");
        }
        break;
      default:
        break;
    }
  }

  const move = (): void => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.row -= 1;
        break;
      case "RIGHT":
        head.col += 1;
        break;
      case "DOWN":
        head.row += 1;
        break;
      case "LEFT":
        head.col -= 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);
    // if eat food
    if (food && head.row === food.row && head.col === food.col) {
      generateFood();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      className="grid grid-rows-20 border"
      tabIndex={0}
      autoFocus
    >
      {Array.from({ length: GridSize }).map((_, row) => {
        return (
          <div key={row} className="flex">
            {Array.from({ length: GridSize }).map((_, col) => {
              return (
                <div
                  key={col}
                  className={`w-5 h-5 border border-slate-100
      ${food && food.row === row && food.col === col ? "bg-red-400" : ""}
      ${snake && snake.some((segment) => segment.row === row && segment.col === col) ? "bg-green-600" : ""}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
