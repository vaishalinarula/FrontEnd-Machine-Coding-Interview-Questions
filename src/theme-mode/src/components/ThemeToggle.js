// src/components/ThemeToggle.js
import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      Toggle to {state.mode === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
