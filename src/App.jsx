import React, { useState } from "react";
import Board from "./components/Board";
import { calculateWinner } from "./helper";
import History from "./components/History";
import StatusMessege from "./components/StatusMessege";
import "./styles/main.scss";

const App = () => {
  //Initial board EMpty board
  const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

  //declares  initial state & keep track of state of board and next player which is null & x resp.
  const [history, setHistory] = useState(NEW_GAME);
  //it keep track of current played move which is initially 0
  const [currentMove, setCurrentMove] = useState(0);
  //it will keep track of board state by played move(it is variable of array of objects of history)
  const current = history[currentMove];
  //deciding winner by passing current board state
  const { winner, winningSquares } = calculateWinner(current.board);
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

  const onStartNewGame = () => {
    //set history & board to emprty new board
    setHistory(NEW_GAME);
    //set current move to 0/initial state
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessege winner={winner} current={current} />
      <Board
        Board={current.board}
        handleSquareOnClickEvent={handleSquareOnClickEvent}
        winningSquares={winningSquares}
      />
      <button
        className={`new-game ${winner ? "active" : ""}`}
        onClick={onStartNewGame}
      >
        Start New Game
      </button>
      <h2
        style={{
          fontWeight: "normal",
        }}
      >
        Current Game History
      </h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};

export default App;
