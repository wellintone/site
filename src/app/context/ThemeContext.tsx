"use client";
import React, { createContext, useState } from "react";

export const ThemeContext = createContext<any>({ theme: false, undefined });

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => !prev);
    if (theme) {
      document.documentElement.classList.remove("theme-dark");
      document.documentElement.classList.add("theme-light");
    } else {
      document.documentElement.classList.remove("theme-light");
      document.documentElement.classList.add("theme-dark");
    }
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
