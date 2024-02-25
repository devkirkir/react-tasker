import { NavLink } from "react-router-dom";

import type { NavigationTitles, NavigationPaths } from "../../Sidebar/config/NavigationConfig";

import { ProjectIcon } from "store/slices/projectsSlice/types";

import ShapedIcon from "../ShapedIcon";

import classNames from "classnames";
import classes from "./NavigateLink.module.css";

type LinkTypes = "primary" | "secondary";

interface NavigateLinkProps {
  value: NavigationTitles | string;
  path: NavigationPaths | string;
  type: LinkTypes;
  id?: string;
  icon: JSX.Element | ProjectIcon;
  isSidebarShow?: boolean;
  testid?: string;
}

const NavigateLink = (props: NavigateLinkProps) => {
  const { value, path, icon, type, isSidebarShow = true, testid } = props;

  const labelClassNames = classNames(classes.Label, {
    [classes.ToggleLabel]: !isSidebarShow,
  });

  const linkTypesClassNames = classNames({
    [classes.PrimaryLink]: type == "primary",
    [classes.SecondaryLink]: type == "secondary",
  });

  const linkTypesActiveClassNames = classNames({
    [classes.PrimaryLinkActive]: type == "primary",
    [classes.SecondaryLinkActive]: type == "secondary",
  });

  return (
    <NavLink
      data-testid={testid}
      className={({ isActive }) => (isActive ? linkTypesActiveClassNames : linkTypesClassNames)}
      to={path}
    >
      {"iconType" in icon ? <ShapedIcon iconType={icon.iconType} color={icon.color} /> : icon}

      <span className={labelClassNames}>{value}</span>
    </NavLink>
  );
};

export default NavigateLink;
