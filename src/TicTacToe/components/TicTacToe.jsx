import React from "react";
import useTicTacToe from "../hooks/useTicTacToe";
import "./TicTacToe.css";
const TicTacToe = () => {
  const { board, handleClick, resetGame, getStatusMessage } = useTicTacToe();

  return (
    <div className="game">
      <h2>Tic Tac Toe</h2>
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
