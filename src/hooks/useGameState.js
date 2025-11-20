import { useState, useEffect } from "react";

export function useGameState() {
  const [isMenu, setIsMenu] = useState(false);
  const [isRepeated, setIsRepeated] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);

  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("bestScore")) || 0;
  });

  useEffect(() => {
    localStorage.setItem("bestScore", bestScore);
  }, [bestScore]);

  return {
    isMenu,
    setIsMenu,
    isRepeated,
    setIsRepeated,
    currentScore,
    setCurrentScore,
    bestScore,
    setBestScore,
  };
}
