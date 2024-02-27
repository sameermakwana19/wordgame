import React from "react";
import "../App.css";

const Grid = ({ rows = 2, cols = 2 }) => {
  const rowsArr = new Array(rows);
  rowsArr.fill(0);
  const colsArr = new Array(cols);
  colsArr.fill(0);

  return (
    <>
      <div className="gridLay">
        {rowsArr.map((i, rowIndex) => (
          <div className="rows" key={rowIndex}>
            {colsArr.map((item, index) => (
              <div className="cols" key={`${index + 1}`}>
                cols{` ${index + 1}`}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
