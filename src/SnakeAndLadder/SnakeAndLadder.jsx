import { useState, useEffect } from "react";
import "./SnakeAndLadder.css";

export function SnakeAndLadder() {
  const [data, setData] = useState([]);
  const boardSize = 10;

  useEffect(() => {
    let newCells = [];

    for (let row = boardSize - 1; row >= 0; row--) {
      let rowCells = [];
      for (let col = 0; col < boardSize; col++) {
        const cellNumber = row * boardSize + col + 1;
        rowCells.push(cellNumber);
      }
      console.log("rowcells", rowCells);
      if (row % 2 !== 0) {
        rowCells.reverse();
      }
      newCells = newCells.concat(rowCells);
      console.log("newCells", newCells);
    }

    setData(newCells);
  }, []);

  return (
    <div className="App">
      Snake and Ladder board
      <div className="game-board">
        {data.map((item) => {
          return <div className="game-cell">{item}</div>;
        })}
      </div>
    </div>
  );
}

export default SnakeAndLadder;
