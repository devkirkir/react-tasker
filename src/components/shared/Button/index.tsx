import { PropsWithChildren } from "react";

import classes from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  title: string;
  type: "primary" | "secondary";
  isSubmit?: boolean;
  callback?: () => void;
}

export const Button = (props: ButtonProps) => {
  const { title, type, isSubmit = false, callback, children } = props;

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={`${classes.Button} ${classes[type]}`}
      onClick={callback}
    >
      {children}
      <span>{title}</span>
    </button>
  );
};
