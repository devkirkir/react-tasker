import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { ThemeVariants } from "hooks/useTheme";

interface ThemeContextProps {
  theme?: ThemeVariants;
  setTheme?: (theme: ThemeVariants) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const currentTheme = localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ThemeVariants)
    : ThemeVariants.DARK;

  const [theme, setTheme] = useState<ThemeVariants>(currentTheme);

  const defaultProps: ThemeContextProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
