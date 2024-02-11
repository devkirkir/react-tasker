import { useContext, useEffect } from "react";

import { ThemeContext } from "providers/ThemeProvider";

export enum ThemeVariants {
  LIGHT = "light",
  DARK = "dark",
}

interface UseTheme {
  theme: ThemeVariants;
  toggleTheme: () => void;
}

const useTheme = (): UseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === ThemeVariants.DARK ? setTheme(ThemeVariants.LIGHT) : setTheme(ThemeVariants.DARK);
  };

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
