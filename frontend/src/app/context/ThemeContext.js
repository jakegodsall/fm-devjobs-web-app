"use client";

import React, { useState, createContext, useEffect } from "react";

export const ThemeContext = createContext();

function getMediaQueryPreference() {
  const mediaQuery = "(prefers-color-scheme: dark)";
  const mql = window.matchMedia(mediaQuery);
  const hasPreference = typeof mql.matches === "boolean";

  if (hasPreference) {
    return mql.matches ? "dark" : "light";
  }
}

function setUserPreference(preference) {
  window.localStorage.setItem("theme", preference);
}

function getUserPreference() {
  window.localStorage.getItem("theme");
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Check to see if the user has preferences
  useEffect(() => {
    // Check local storage for user preference
    const localTheme = getUserPreference();
    if (localTheme) {
      setTheme(localTheme);
    } else {
      // Check the system preference
      const systemTheme = getMediaQueryPreference();
      if (systemTheme) {
        setTheme(systemTheme);
      }
    }
  }, []);

  // Set user preference in the local storage
  useEffect(() => {
    setUserPreference(theme);
  }, [theme]);

  function toggleTheme() {
    console.log("changed");
    setTheme((dm) => !dm);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
