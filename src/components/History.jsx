import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          // to show the move
          <li key={move}>
            {/* to go to the move onclick by moveTo fn */}
            <button
              style={{
                fontWeight: move === currentMove ? "bold" : "normal",
              }}
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? "Go to Start #0" : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default History;
