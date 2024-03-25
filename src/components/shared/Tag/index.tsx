import type { Colors } from "types";

import classes from "./Tag.module.css";

interface TagProps {
  color: Colors;
  label: string;
}

const Tag = (props: TagProps) => {
  const { color, label } = props;

  return (
    <span className={classes.Tag} style={{ backgroundColor: color }}>
      {label}
    </span>
  );
};

export default Tag;
