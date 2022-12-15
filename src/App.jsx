import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import "./styles/main.scss";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  //deciding winner by passing current board state
  const winner = calculateWinner(board);
  //execute on the click
  const handleSquareOnClickEvent = (position) => {
    //check the position is aready filled or not
    if (board[position] || winner) {
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

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>
        {winner
          ? `Winner is ${winner} ` //prints the winner
          : `Next player is ${isXNext ? "X" : "0"}`}
      </h2>
      <Board
        Board={board}
        handleSquareOnClickEvent={handleSquareOnClickEvent}
      />
    </div>
  );
};

export default App;
