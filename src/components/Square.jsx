import React from "react";

const Square = ({ value, onClick, isWinningSquare }) => {
  //for classname we use className=""
  return (
    <button
      className={`square ${value === "X" ? "text-green" : "text-orange"} ${
        isWinningSquare ? "winning" : ""
      }`}
      onClick={onClick}
      //To add style to winning Squares.
    >
      {value}
    </button>
  );
};

export default Square;
