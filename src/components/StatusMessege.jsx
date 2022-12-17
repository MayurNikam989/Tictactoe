import React from "react";

const StatusMessege = ({ winner, current }) => {
  const noMovesLeft = current.board.every((el) => el !== null);
  return (
    <h2>
      {winner && (
        <>
          The Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          The Next Player is{" "}
          <span className={current.isXNext ? "text-green" : "text-orange"}>
            {current.isXNext ? "X" : "0"}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> &{" "}
          <span className="text-orange">0</span> are Tied
        </>
      )}
    </h2>
  );
};

export default StatusMessege;
