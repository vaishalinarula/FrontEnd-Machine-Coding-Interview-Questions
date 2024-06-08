import React, { useState } from "react";

const Input = ({ type, maxLength, minValue, maxValue, ...props }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const validateInput = (value) => {
    let error = "";
    if (type === "text" && maxLength && value.length > maxLength) {
      error = `Text must be less than ${maxLength} characters`;
    } else if (type === "number") {
      const numberValue = parseFloat(value);
      if (minValue !== undefined && numberValue < minValue) {
        error = `Number must be greater than or equal to ${minValue}`;
      } else if (maxValue !== undefined && numberValue > maxValue) {
        error = `Number must be less than or equal to ${maxValue}`;
      }
    }
    setError(error);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    validateInput(newValue);
  };

  return (
    <div>
      <input type={type} value={value} onChange={handleChange} {...props} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
};

export default Input;
