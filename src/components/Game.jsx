import React, { useEffect, useState } from "react";
import InputElement from "./InputElement";
import Guesses from "./Guesses";
import GameConditions from "./GameConditions";

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    if (guesses.length === 6 && !gameOver) {
      setGameOver(true);
    }

    return () => {};
  }, [guesses, gameOver]);

  function addToGuesses(newObject) {
    setGuesses([...guesses, newObject]);
  }

  console.log(hasWon, gameOver);

  return (
    <>
      {!gameOver && <GameConditions />}
      <h2 className="heading">WORDLE</h2>
      <hr />
      {!gameOver && <InputElement addToGuesses={addToGuesses} />}
      {gameOver && (
        <h2>
          {!hasWon
            ? "Game Over, Answer : FOUND"
            : `Congratulations, you guessed the word correctly in only ${
                guesses.length === 1 ? "1 guess" : `${guesses.length} guesses`
              } `}
        </h2>
      )}

      <hr />
      <h2>Guesses</h2>
      <Guesses
        guesses={guesses}
        setGameOver={setGameOver}
        setHasWon={setHasWon}
      />
    </>
  );
};

export default Game;
