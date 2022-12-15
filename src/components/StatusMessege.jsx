import React from "react";

const StatusMessege = ({ winner, current }) => {
  const noMovesLeft = current.board.every((el) => el !== null);
  return (
    <h2>
      {winner && `The Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `The next player is ${current.isXNext ? "X" : "0"}`}
      {!winner && noMovesLeft && `X & 0 are Tied`}
    </h2>
  );
};

export default StatusMessege;
