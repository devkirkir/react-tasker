import { ShapedIconsColors } from "../ShapedIcon/config/ShapedIconConfig";

import classes from "./ColorCircle.module.css";

interface ColorCircleProps {
  color: ShapedIconsColors;
}

const ColorCircle = (props: ColorCircleProps) => {
  const { color } = props;

  return <div className={classes.ColorCircle} style={{ backgroundColor: color }}></div>;
};

export default ColorCircle;
