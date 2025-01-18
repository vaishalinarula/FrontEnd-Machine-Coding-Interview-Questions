import React, { useState } from "react";
import "./Calculator.css"; // Assuming styles are in a separate file

const Calculator = () => {
  const [display, setDisplay] = useState(""); // Tracks the current input and result

  // Handle button click
  const handleClick = (value) => {
    // If equals button is pressed, evaluate the expression
    if (value === "=") {
      try {
        setDisplay(eval(display).toString()); // Evaluate the expression
      } catch (error) {
        setDisplay("Error"); // Handle invalid expression
      }
    } else if (value === "C") {
      setDisplay(""); // Clear the display
    } else {
      setDisplay(display + value); // Add the clicked value to the display
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div className="display">{display || "0"}</div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("C")}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick("=")}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
