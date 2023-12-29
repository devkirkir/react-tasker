import { useContext, useEffect } from "react";

import { ThemeContext } from "providers/ThemeProvider";

export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}

interface IUseTheme {
  theme: ETheme;
  toggleTheme: () => void;
}

const useTheme = (): IUseTheme => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    theme === ETheme.DARK ? setTheme(ETheme.LIGHT) : setTheme(ETheme.DARK);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};

export default useTheme;
