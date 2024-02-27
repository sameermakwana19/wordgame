import React from "react";
import Guess from "./Guess";

const rowsArr = [0, 0, 0, 0, 0, 0];

const Guesses = ({ guesses, setGameOver }) => {
  console.log(guesses);
  return (
    // <li key={id}>{label}</li>
    // RowComponent
    <ul>
      {rowsArr.map((item, index) => (
        <Guess
          key={index}
          value={guesses[index]?.label || ""}
          setGameOver={setGameOver}
        />
      ))}
    </ul>
  );
};

export default Guesses;
