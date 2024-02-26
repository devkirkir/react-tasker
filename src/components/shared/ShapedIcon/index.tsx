import { cloneElement, memo } from "react";

import { ShapedIconsComponents } from "./config/ShapedIconConfig";

import type { ProjectIcon } from "store/slices/projectsSlice/types";

import classes from "./ShapedIcon.module.css";

interface Sizes {
  s: object;
  l: object;
}

interface ShapedIconProps extends ProjectIcon {
  size?: keyof Sizes;
}

const SIZES: Sizes = {
  s: {
    width: "14px",
    height: "16px",
  },
  l: {
    width: "25px",
    height: "23px",
  },
};

const ShapedIcon = memo((props: ShapedIconProps) => {
  const { iconType, color, size = "s" } = props;

  // хз, нормально ли так будет :))
  const iconComponent = ShapedIconsComponents[iconType] || <></>;
  const clonedElem = cloneElement(iconComponent, { color });

  return (
    <div className={classes.ShapedIcon} style={SIZES[size]}>
      {clonedElem}
    </div>
  );
});

ShapedIcon.displayName = "ShapedIcon";

export default ShapedIcon;
