import { NavLink } from "react-router-dom";

import type { ENavigationValues, ENavigationPaths } from "../../Sidebar/config/NavigationConfig";

import { TProjectIcon } from "store/slices/projectsSlice/types";

import ShapedIcon from "../ShapedIcon";

import classNames from "classnames";
import classes from "./NavigateLink.module.css";

type TLinkTypes = "primary" | "secondary";

interface NavigateLinkProps {
  value: ENavigationValues | string;
  path: ENavigationPaths | string;
  type: TLinkTypes;
  id?: string;
  icon: JSX.Element | TProjectIcon;
  isSidebarShow?: boolean;
  testid?: string;
  // callback - для chooseProject в Projects
  callback?: (id: string) => void;
}

const NavigateLink = (props: NavigateLinkProps) => {
  const { id, value, path, icon, callback = () => {}, type, isSidebarShow = true, testid } = props;

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
      onClick={() => callback(id)}
    >
      {"iconType" in icon ? <ShapedIcon iconType={icon.iconType} color={icon.color} /> : icon}

      <span className={labelClassNames}>{value}</span>
    </NavLink>
  );
};

export default NavigateLink;
