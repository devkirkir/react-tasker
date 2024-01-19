import { Link } from "react-router-dom";
import LogoIcon from "assets/icons/Logo.svg";

import classNames from "classnames";
import classes from "./Logo.module.css";

interface LogoProps {
  isSidebarShow?: boolean;
}

export const Logo = (props: LogoProps): JSX.Element => {
  const { isSidebarShow = true } = props;

  const toggleLogoInSidebar = classNames(classes.Logo, {
    [classes.HiddenLogo]: !isSidebarShow,
  });

  return (
    <Link to="/app" className={toggleLogoInSidebar}>
      <LogoIcon className={classes.Icon} />

      <span className={classes.Label}>Tasker</span>
    </Link>
  );
};
