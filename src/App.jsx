import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import History from "./components/History";
import "./styles/main.scss";

const App = () => {
  //declares  initial state & keep track of state of board and next player which is null & x resp.
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  //it keep track of current played move which is initially 0
  const [currentMove, setCurrentMove] = useState(0);
  //it will keep track of board state by played move(it is variable of array of objects of history)
  const current = history[currentMove];
  //deciding winner by passing current board state
  const winner = calculateWinner(current.board);
  //execute on the click
  const handleSquareOnClickEvent = (position) => {
    //check the position is aready filled or not
    if (current.board[position] || winner) {
      return;
    }
    // console.log("history", history); consoles the history for verification

    //sets the board position either X or 0
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      //save the setted board to the newboard
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          //check which player's turn and retur X or 0
          return last.isXNext ? "X" : "0";
        }

        return square;
      });
      //returns the array of objects & always should return in the pattern of initial state
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    //sets/iterates prev by 1
    setCurrentMove((prev) => prev + 1);
  };
  //moveTo fn set current move to the respected move.
  const moveTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>
        {winner
          ? `Winner is ${winner} ` //prints the winner
          : `Next player is ${current.isXNext ? "X" : "0"}`}
      </h2>
      <Board
        Board={current.board}
        handleSquareOnClickEvent={handleSquareOnClickEvent}
      />
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
