"use client";

import Provider, { GameContext } from "./provider";
import SnakeGrid from "./components/snakeGrid";
import { useContext } from "react";

function Score() {
  const { gameOver, setGameOver, score, incrementScore } =
    useContext(GameContext);
  return (
    <div className="flex flex-row space-x-2">
      <h2>Score:</h2>
      <span>{score}</span>
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
