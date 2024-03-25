import { Colors } from "types";

import classes from "./ColorCircle.module.css";

interface ColorCircleProps {
  color: Colors;
}

const ColorCircle = (props: ColorCircleProps) => {
  const { color } = props;

  return <div className={classes.ColorCircle} style={{ backgroundColor: color }}></div>;
};

export default ColorCircle;
