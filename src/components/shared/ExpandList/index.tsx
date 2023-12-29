import { useState } from "react";
import classes from "./ExpandList.module.css";
import classNames from "classnames";

interface IProps {
  title: string;
  items: JSX.Element[];
}

const ExpandList = (props: IProps) => {
  const { items, title } = props;

  const [isExpand, setExpand] = useState<boolean>(false);

  const collapseBlock = () => {
    setExpand((isExpand) => !isExpand);
  };

  const classesExpandList = classNames(classes.ExpandList, {
    [classes.ExpandListHidden]: isExpand,
  });

  return (
    <section className={classesExpandList}>
      <h4 onClick={collapseBlock}>{title}</h4>

      <div className={classes.ExpandBlock}>
        <ul>{items}</ul>
      </div>
    </section>
  );
};

export default ExpandList;
