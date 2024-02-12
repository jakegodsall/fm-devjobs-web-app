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
  return window.localStorage.getItem("theme");
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(undefined);

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

  useEffect(() => {
    if (theme !== undefined) {
      setUserPreference(theme);

      document.body.setAttribute("data-theme", theme);
    }
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  // Set the theme on the body

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
