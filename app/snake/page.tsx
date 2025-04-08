"use client";

import Provider, {
  GameStatusContext,
  GameStatusContexType,
  ScoreContext,
  ScoreContextType,
} from "./provider";
import SnakeGrid from "./components/snakeGrid";
import { useContext } from "react";

function Score() {
  const { score } = useContext(ScoreContext) as ScoreContextType;
  const { gameOver } = useContext(GameStatusContext) as GameStatusContexType;

  return (
    <div>
      <div className="flex flex-row space-x-2">
        <h2>Score:</h2>
        <span>{score}</span>
      </div>
      {gameOver && (
        <div className="flex flex-col justify-center space-y-4">
          <span className="text-red-600">Game Over!</span>
          <button
            className="rounded-md bg-blue-500 p-2"
            onClick={() => window.location.reload()}
          >
            Play Again!
          </button>
        </div>
      )}
    </div>
  );
}

export default function Snake() {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1>Snake Game</h1>
      <Provider>
        <Score />
        <SnakeGrid />
      </Provider>
    </div>
  );
}
