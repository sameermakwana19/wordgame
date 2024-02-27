import React, { useState, useEffect, useMemo } from "react";

const colsArr = [0, 0, 0, 0, 0];
const answer = "SAMEE";
let currIndex = -1;
let curr = answer.split(""); // [s,a,m,e,e]

const Guess = ({ value, setGameOver }) => {
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if (value === answer && !correct) {
      setCorrect(true);
      setGameOver(true);
    }

    return () => {};
  }, [correct, value]);

  const values = useMemo(() => {
    let arr = String(value)
      .split("")
      .map((v, i) => {
        // curr.indexOf(item) != -1 ? curr.splice(curr.indexOf(item), 1) : "";
        let totalCharacter = curr.filter((c) => c === v).length;

        console.log("totalCharacter", totalCharacter, v);
        let temp = null;
        console.log("Index:", i);

        curr.forEach((c, j) => {
          console.log(j);
          if (c === v && totalCharacter !== 0) {
            temp = { v, isFound: true };
            totalCharacter -= 1;
          } else {
            temp = { v, isFound: false };
          }
        });

        return temp;
      });

    return arr;
  }, [value]);

  console.log(value);
  function render(v, index) {
    if (v) {
      return (
        <span className={v.isFound ? "cols present" : "cols"} key={index}>
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
