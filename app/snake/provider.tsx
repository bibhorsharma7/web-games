"use client";
import { useState, createContext } from "react";

export const GameContext = createContext({});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function incrementScore() {
    const newScore = score + 1;
    setScore(newScore);
  }

  return (
    <GameContext.Provider
      value={{ gameOver, setGameOver, score, incrementScore }}
    >
      {children}
    </GameContext.Provider>
  );
}
