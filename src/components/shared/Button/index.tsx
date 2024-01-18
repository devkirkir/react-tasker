import { PropsWithChildren } from "react";
import classes from "./Button.module.css";

interface IProps extends PropsWithChildren {
  title: string;
  type: "primary" | "secondary";
  callback?: () => void;
}

export const Button = (props: IProps) => {
  const { title, type, callback, children } = props;

  return (
    <button className={`${classes.Button} ${classes[type]}`} onClick={callback}>
      {children}
      <span>{title}</span>
    </button>
  );
};
