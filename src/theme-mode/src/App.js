// src/App.js
import React, { useContext } from "react";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";

const App = () => {
  const { state } = useContext(ThemeContext);

  return (
    <div className={theme.mode === "light" ? "light-theme" : "dark-theme"}>
      <h1>{state.mode === "light" ? "Light Mode" : "Dark Mode"}</h1>
      <ThemeToggle />
      <p>This is a sample application demonstrating dark/light mode.</p>
    </div>
  );
};

export default App;
