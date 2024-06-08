import React from "react";
import Input from "./Input";
import "./Main.css";

const Main = () => {
  return (
    <div className="App">
      <h1>Reusable Input Component</h1>
      <div>
        <label>Text Input (Max 10 characters): </label>
        <Input type="text" maxLength={10} />
      </div>
      <div>
        <label>Number Input (Between 10 and 100): </label>
        <Input type="number" minValue={10} maxValue={100} />
      </div>
    </div>
  );
};

export default Main;
