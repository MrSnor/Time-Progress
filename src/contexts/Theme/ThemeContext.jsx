// ThemeContext.js

import React, { createContext, useContext, useState } from "react";

// Create a context
const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("storedTheme");
  const [theme, setTheme] = useState(storedTheme || "light"); // Default theme is 'light'

  const toggleTheme = () => {
    // setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("storedTheme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the context
export const useTheme = () => {
  return useContext(ThemeContext);
};
