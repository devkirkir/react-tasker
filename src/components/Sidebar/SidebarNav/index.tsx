import { ELinkTypes, NavigateLink } from "../../shared/NavigateLink";

import { NavigationConfig, type ENavigationValues } from "../config/NavigationConfig";

import classes from "./SidebarNav.module.css";

interface IProps {
  isSidebarShow: boolean;
}

export const SidebarNav = (props: IProps) => {
  const { isSidebarShow } = props;

  const renderedLinks = Object.keys(NavigationConfig).map((route: ENavigationValues) => {
    const { value, path, icon } = NavigationConfig[route];

    return (
      <li className={classes.ListItem} key={`link-${value}`}>
        <NavigateLink
          value={value}
          path={path}
          icon={icon}
          type={ELinkTypes.PRIMARY}
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
