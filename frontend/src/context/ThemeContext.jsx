import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  // Load saved mode
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "dark";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  // Toggle mode
  const toggleTheme = () => {
    const newMode = theme === "dark" ? "light" : "dark";
    setTheme(newMode);
    localStorage.setItem("theme", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
