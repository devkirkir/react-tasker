import useTheme, { ThemeVariants } from "hooks/useTheme";

import classes from "./ThemeSwitcher.module.css";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const classNames =
    theme == ThemeVariants.LIGHT
      ? `${classes.toggle} ${classes.toggleLight}`
      : `${classes.toggle} ${classes.toggleDark}`;

  return (
    <button onClick={toggleTheme} className={classNames} data-testid="theme-switcher">
      <div className={classes.circle}>
        <div className={classes.moon}></div>
      </div>

      <div className={classes.clouds}>
        <div className={classes.cloud}></div>
        <div className={classes.cloud}></div>
        <div className={classes.cloud}></div>
      </div>

      <div className={classes.stars}>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
        <div className={classes.star}></div>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
