import { memo } from "react";

import { ShapedIcons } from "./config/ShapedIconConfig";

import type { TProjectIcon } from "store/slices/projectsSlice/types";

import classes from "./ShapedIcon.module.css";

export const ShapedIcon = memo((props: TProjectIcon) => {
  const { iconType, color } = props;

  return <div className={`${classes.ShapedIcon} ${classes[color]}`}>{ShapedIcons[iconType]}</div>;
});

ShapedIcon.displayName = "ShapedIcon";
