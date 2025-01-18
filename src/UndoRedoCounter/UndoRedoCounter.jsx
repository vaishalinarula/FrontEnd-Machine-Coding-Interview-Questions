import React, { useState } from "react";

const CounterWithHistory = () => {
  const [counter, setCounter] = useState(0);
  const [undoStack, setUndoStack] = useState([]); // Stores the history of values for undo
  const [redoStack, setRedoStack] = useState([]); // Stores the history of undone values for redo

  // Increment Counter
  const increment = () => {
    setUndoStack([...undoStack, counter]); // Save the current value to undo stack before increment
    setCounter(counter + 1);
    setRedoStack([]); // Clear redo stack after any new action
  };

  // Decrement Counter
  const decrement = () => {
    setUndoStack([...undoStack, counter]); // Save the current value to undo stack before decrement
    setCounter(counter - 1);
    setRedoStack([]); // Clear redo stack after any new action
  };

  // Undo the last action
  const undo = () => {
    if (undoStack.length === 0) return; // No undo available
    const lastValue = undoStack[undoStack.length - 1]; // Get the last value from the undo stack
    setRedoStack([...redoStack, counter]); // Save the current value to redo stack
    setUndoStack(undoStack.slice(0, -1)); // Remove the last value from the undo stack
    setCounter(lastValue); // Set the counter to the last value
  };

  // Redo the last undone action
  const redo = () => {
    if (redoStack.length === 0) return; // No redo available
    const lastRedoValue = redoStack[redoStack.length - 1]; // Get the last value from the redo stack
    setUndoStack([...undoStack, counter]); // Save the current value to undo stack
    setRedoStack(redoStack.slice(0, -1)); // Remove the last value from the redo stack
    setCounter(lastRedoValue); // Set the counter to the redo value
  };

  return (
    <div>
      <h1>Undo Redo Counter: {counter}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={undo} disabled={undoStack.length === 0}>
          Undo
        </button>
        <button onClick={redo} disabled={redoStack.length === 0}>
          Redo
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h2>History:</h2>
        <p>Undo Stack: {JSON.stringify(undoStack)}</p>
        <p>Redo Stack: {JSON.stringify(redoStack)}</p>
      </div>
    </div>
  );
};

export default CounterWithHistory;
