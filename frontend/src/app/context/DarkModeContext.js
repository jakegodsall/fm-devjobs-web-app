"use client";

import React, { useState, createContext } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    console.log("changed");
    setDarkMode((dm) => !dm);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
