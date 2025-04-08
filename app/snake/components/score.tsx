"use client";

import {
  GameStatusContext,
  GameStatusContexType,
  ScoreContext,
  ScoreContextType,
} from "../providers";
import { useContext } from "react";

export default function Score() {
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
