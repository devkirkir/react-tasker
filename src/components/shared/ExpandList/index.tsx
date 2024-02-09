import { useState } from "react";

import classNames from "classnames";
import classes from "./ExpandList.module.css";

interface ExpandListProps {
  title: string;
  items: JSX.Element[];
}

const ExpandList = (props: ExpandListProps) => {
  const { items, title } = props;

  const [isExpand, setExpand] = useState(false);

  const collapseBlock = () => setExpand((isExpand) => !isExpand);

  const classesExpandList = classNames(classes.ExpandList, {
    [classes.ExpandListHidden]: isExpand,
  });

  return (
    <section className={classesExpandList}>
      <button onClick={collapseBlock}>{title}</button>

      <div className={classes.ExpandBlock}>
        <ul>{items}</ul>
      </div>
    </section>
  );
};

export default ExpandList;
