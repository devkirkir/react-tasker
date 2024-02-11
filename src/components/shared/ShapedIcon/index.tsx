import { memo } from "react";

import { ShapedIcons } from "./config/ShapedIconConfig";

import type { ProjectIcon } from "store/slices/projectsSlice/types";

import classes from "./ShapedIcon.module.css";

const ShapedIcon = memo((props: ProjectIcon) => {
  const { iconType, color } = props;

  return <div className={`${classes.ShapedIcon} ${classes[color]}`}>{ShapedIcons[iconType]}</div>;
});

ShapedIcon.displayName = "ShapedIcon";

export default ShapedIcon;
