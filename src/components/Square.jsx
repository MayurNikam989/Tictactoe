import React from "react";

const Square = ({ value, onClick }) => {
  //for classname we use className=""
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
