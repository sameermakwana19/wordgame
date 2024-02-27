import React, { useState } from "react";
import InputElement from "./InputElement";
import Guesses from "./Guesses";
// import Grid from "./Grid";

const Game = () => {
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  // let gameOver = false;

  if (guesses.length === 6 && !gameOver) {
    // gameOver = true;
    // return;
    setGameOver(true);
  }

  function addToGuesses(newObject) {
    setGuesses([...guesses, newObject]);
  }

  return (
    <>
      <h2>WORD GAME</h2>
      <hr />
      {/* <InputElement guesses={guesses} setGuesses={setGuesses} /> */}
      {!gameOver ? (
        <InputElement addToGuesses={addToGuesses} />
      ) : (
        <h2>Game Over </h2>
      )}

      <hr />
      <h2>Guesses</h2>
      {/* {guesses.map(({ label, id }) => (
        <li key={id}>{label}</li>
      ))} */}
      <Guesses guesses={guesses} setGameOver={setGameOver} />
      {/* <Grid rows={5} cols={5} /> */}
    </>
  );
};

export default Game;
