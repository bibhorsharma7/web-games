export const generateFood = (gridSize: number) => {
  const x = Math.floor(Math.random() * gridSize);
  const y = Math.floor(Math.random() * gridSize);
  return { row: x, col: y };
};

export const moveSnake = (
  snake: { row: number; col: number }[],
  setSnake: React.Dispatch<
    React.SetStateAction<{ row: number; col: number }[]>
  >,
  food: { row: number; col: number } | undefined,
  setFood: React.Dispatch<
    React.SetStateAction<{ row: number; col: number } | undefined>
  >,
  direction: "UP" | "DOWN" | "LEFT" | "RIGHT",
  gridSize: number,
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
    return; // Stop movement if collision occurs
  }

  newSnake.unshift(head);
  if (food && head.row === food.row && head.col === food.col) {
    setFood(generateFood(gridSize));
  } else {
    newSnake.pop();
  }

  setSnake(newSnake);
};

export const handleKeyDown = (
  event: React.KeyboardEvent<HTMLDivElement>,
  direction: "UP" | "DOWN" | "LEFT" | "RIGHT",
  setDirection: React.Dispatch<
    React.SetStateAction<"UP" | "DOWN" | "LEFT" | "RIGHT">
  >,
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
