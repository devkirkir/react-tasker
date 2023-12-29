import { PropsWithChildren, createContext, useMemo, useState } from "react";
import { ETheme } from "hooks/useTheme";

interface IContextProps {
  // eslint-disable-next-line
  theme?: ETheme;
  // eslint-disable-next-line
  setTheme?: (theme: ETheme) => void;
}

export const ThemeContext = createContext<IContextProps>({});

export const ThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const currentTheme = localStorage.getItem("theme")
    ? (localStorage.getItem("theme") as ETheme)
    : ETheme.DARK;

  const [theme, setTheme] = useState<ETheme>(currentTheme);

  const defaultProps: IContextProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
