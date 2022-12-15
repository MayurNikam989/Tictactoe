import React from "react";

const Square = ({ value, onClick, iswinningSquare }) => {
  //for classname we use className=""
  return (
    <button
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningSquare ? "bold" : "normal" }}
    >
      {value}
    </button>
  );
};

export default Square;
