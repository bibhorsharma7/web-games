"use client";
import { useState, createContext, Dispatch, SetStateAction } from "react";

export type ScoreContextType = {
  score: number;
  incrementScore: () => void;
};

export type GameStatusContexType = {
  gameOver: boolean;
  setGameOver: Dispatch<SetStateAction<boolean>>;
};

export const ScoreContext = createContext<ScoreContextType | null>(null);
export const GameStatusContext = createContext<GameStatusContexType | null>(
  null,
);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function incrementScore() {
    const newScore = score + 1;
    setScore(newScore);
  }

  return (
    <ScoreContext.Provider value={{ score, incrementScore }}>
      <GameStatusContext.Provider value={{ gameOver, setGameOver }}>
        {children}
      </GameStatusContext.Provider>
    </ScoreContext.Provider>
  );
}
