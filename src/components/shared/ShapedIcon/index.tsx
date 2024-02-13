import { cloneElement, memo } from "react";

import { ShapedIconsComponents } from "./config/ShapedIconConfig";

import type { ProjectIcon } from "store/slices/projectsSlice/types";

import classes from "./ShapedIcon.module.css";

const ShapedIcon = memo((props: ProjectIcon) => {
  const { iconType, color } = props;

  // хз, нормально ли так будет :))
  const clonedElem = cloneElement(ShapedIconsComponents[iconType], { color });

  return <div className={`${classes.ShapedIcon} ${classes[color]}`}>{clonedElem}</div>;
});

ShapedIcon.displayName = "ShapedIcon";

export default ShapedIcon;
