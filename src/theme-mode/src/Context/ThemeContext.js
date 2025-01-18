// src/context/ThemeContext.js
import React, { createContext, useReducer } from "react";

// Initial theme state
const initialState = {
  mode: "light",
};

// Reducer to handle theme state changes
const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        mode: state.mode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// Create the ThemeContext
export const ThemeContext = createContext();

// Create a ThemeProvider to wrap the app and provide the theme context
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
