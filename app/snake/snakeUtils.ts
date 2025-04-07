import { Point, Direction } from "./types";

export const generateFood = (gridSize: number): Point => {
  const x = Math.floor(Math.random() * gridSize);
  const y = Math.floor(Math.random() * gridSize);
  return { row: x, col: y };
};

export const moveSnake = (
  snake: Point[],
  setSnake: React.Dispatch<React.SetStateAction<Point[]>>,
  food: Point | undefined,
  setFood: React.Dispatch<React.SetStateAction<Point | undefined>>,
  direction: Direction,
  gridSize: number,
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>,
  incrementScore: () => void,
) => {
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

  // Check for wall collisions
  if (
    head.row < 0 ||
    head.col < 0 ||
    head.row >= gridSize ||
    head.col >= gridSize
  ) {
    setGameOver(true);
    return; // Stop movement if collision occurs
  }

  newSnake.unshift(head);
  if (food && head.row === food.row && head.col === food.col) {
    setFood(generateFood(gridSize));
    incrementScore();
  } else {
    newSnake.pop();
  }

  setSnake(newSnake);
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  direction: Direction,
  setDirection: React.Dispatch<React.SetStateAction<Direction>>,
) => {
  switch (event.key) {
    case "ArrowUp":
      if (direction !== "DOWN") {
        setDirection("UP");
      }
      break;
    case "ArrowDown":
      if (direction !== "UP") {
        setDirection("DOWN");
      }
      break;
    case "ArrowLeft":
      if (direction !== "RIGHT") {
        setDirection("LEFT");
      }
      break;
    case "ArrowRight":
      if (direction !== "LEFT") {
        setDirection("RIGHT");
      }
      break;
    default:
      break;
  }
};
