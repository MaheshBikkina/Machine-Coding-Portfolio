import { useEffect, useState } from "react";

import { ThemeContext } from "./ThemeContext";
import { themes } from "../styles/themes";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("portfolio-theme"),
  );

  useEffect(() => {
    const selectedTheme = themes[theme];
    if (selectedTheme) {
      Object.entries(selectedTheme).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
