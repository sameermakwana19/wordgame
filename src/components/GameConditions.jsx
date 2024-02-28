import React from "react";

const GameConditions = () => {
  return (
    <div style={{ color: "black" }}>
      <span className="correct-pos" style={{ margin: "0 5px", padding: "5px" }}>
        {" "}
        Correct position
      </span>
      <span className="present" style={{ margin: "0 5px", padding: "5px" }}>
        {" "}
        Correct guess but wrong position
      </span>
      <span
        style={{
          background: "greenYellow",
          margin: "0 5px",
          padding: "5px",
        }}
      >
        {" "}
        Win Condition
      </span>
    </div>
  );
};

export default GameConditions;
