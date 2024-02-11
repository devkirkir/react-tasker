import NavigateLink from "../../shared/NavigateLink";

import { NavigationConfig, type NavigationTitles } from "../config/NavigationConfig";

import classes from "./SidebarNav.module.css";

interface SidebarNavProps {
  isSidebarShow: boolean;
}

const SidebarNav = (props: SidebarNavProps) => {
  const { isSidebarShow } = props;

  const renderedLinks = Object.keys(NavigationConfig).map((route: NavigationTitles) => {
    const { value, path, icon } = NavigationConfig[route];

    return (
      <li className={classes.ListItem} key={`link-${value}`}>
        <NavigateLink
          value={value}
          path={path}
          icon={icon}
          type="primary"
          isSidebarShow={isSidebarShow}
          testid={`link-${value}`}
        />
      </li>
    );
  });

  return (
    <nav className={classes.SidebarNav}>
      <ul className={classes.List}>{renderedLinks}</ul>
    </nav>
  );
};

export default SidebarNav;
