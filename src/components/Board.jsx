import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [Board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  //execute on the click
  const handleSquareOnClickEvent = (position) => {
    //check the position is aready filled or not
    if (Board[position]) {
      return;
    }

    //sets the board position either X or 0
    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          //check which player's turn and retur X or 0
          return isXNext ? "X" : "0";
        }

        return square;
      });
    });
    //check which player's turn is next
    setIsXNext((prev) => {
      return !prev;
    });
  };
  //imports the square
  const renderSquare = (position) => {
    return (
      <Square
        value={Board[position]}
        onClick={() => {
          handleSquareOnClickEvent(position);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>

      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>

      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
