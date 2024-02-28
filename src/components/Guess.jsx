import React, { useState, useEffect, useMemo } from "react";

const colsArr = [0, 0, 0, 0, 0];
const answer = "FOUND";

const Guess = ({ value, setGameOver, setHasWon }) => {
  let curr = answer.split(""); // [s,a,m,e,e]
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if (value === answer && !correct) {
      setCorrect(true);
      setGameOver(true);
      setHasWon(true);
    }

    return () => {};
  }, [correct, value]);

  const values = useMemo(() => {
    let arr = String(value)
      .split("")
      .map((v, i) => {
        // console.log("v", v, i);

        let index = curr.indexOf(v);
        let correctPos = value.indexOf(v) === index;

        if (index != -1) {
          curr[index] = "#";
          return { v, isFound: true, isCorrectlyPos: correctPos };
        }

        return { v, isFound: false, isCorrectlyPos: correctPos };
      });

    return arr;
  }, [value]);

  function render(v, index) {
    if (v) {
      return (
        <span
          className={`${v.isFound ? "cols present" : "cols"} ${
            v.isCorrectlyPos && "correct-pos"
          }`}
          key={index}
        >
          {v.v}
        </span>
      );
    }
    return <span className="cols" key={index}></span>;
  }

  return (
    <>
      <div className={correct ? "rows correct" : "rows"}>
        {colsArr.map((_, index) => {
          return render(values[index], index);
        })}
      </div>
    </>
  );
};

export default Guess;
