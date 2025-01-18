import React, { useState } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Simple validation: check if the input is non-empty
    setIsValid(value.trim() !== "");
  };

  return (
    <div>
      <h2>Input Component</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{
          border: isValid ? "1px solid #ccc" : "1px solid red",
          padding: "10px",
          borderRadius: "4px",
          transition: "border-color 0.2s ease", // Smooth transition effect
        }}
      />
      {!isValid && <p style={{ color: "red" }}>Input is invalid!</p>}
    </div>
  );
};

export default InputComponent;
