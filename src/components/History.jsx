import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-container">
      <ul className="history">
        {history.map((_, move) => {
          return (
            // to show the move
            <li key={move}>
              {/* to go to the move onclick by moveTo fn */}
              <button
                className={`btn-move ${move === currentMove ? "active" : ""}`}
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
    </div>
  );
};
export default History;
