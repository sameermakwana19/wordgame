import React from "react";
import Guess from "./Guess";

const rowsArr = [0, 0, 0, 0, 0, 0];

const Guesses = ({ guesses, setGameOver, setHasWon }) => {
  return (
    <ul>
      {rowsArr.map((item, index) => (
        <Guess
          key={guesses[index]?.id || index}
          value={guesses[index]?.label || ""}
          setGameOver={setGameOver}
          setHasWon={setHasWon}
        />
      ))}
    </ul>
  );
};

export default Guesses;
