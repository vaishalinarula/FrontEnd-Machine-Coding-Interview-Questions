import React, { useState } from "react";
import "./Stack.css";

function Stack() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const push = () => {
    if (inputValue !== "") {
      setStack([...stack, Number(inputValue)]);
      setInputValue("");
    }
  };

  const pop = () => {
    if (!isEmpty()) {
      const newStack = [...stack]; // or setStack(stack.slice(0, -1));
      newStack.pop();
      setStack(newStack);
    }
  };

  const isEmpty = () => {
    return stack.length === 0;
  };

  const top = () => {
    if (!isEmpty()) {
      return stack[stack.length - 1];
    }
    return "Stack is empty";
  };

  return (
    <div className="stack-container">
      <h2>Stack</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={push}>Push</button>
      <button onClick={pop}>Pop</button>
      <div className="stack">
        {stack.length > 0 ? (
          stack.map((item, index) => (
            <div key={index} className="stack-item">
              {item}
            </div>
          ))
        ) : (
          <div className="stack-empty">Stack is empty</div>
        )}
      </div>
      <div className="stack-top">Top: {top()}</div>
    </div>
  );
}

export default Stack;
