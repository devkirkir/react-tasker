import { PropsWithChildren, memo } from "react";

import classNames from "classnames";
import classes from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  title?: string;
  type: "primary" | "secondary";
  isSubmit?: boolean;
  isDisabled?: boolean;
  callback?: () => void;
}

const Button = memo((props: ButtonProps) => {
  const { title, type, isSubmit = false, isDisabled = false, callback, children } = props;

  const disabledClassNames = classNames(classes.Button, classes[type], {
    [classes.Disabled]: isDisabled,
  });

  return (
    <button
      type={isSubmit ? "submit" : "button"}
      className={disabledClassNames}
      onClick={callback}
      disabled={isDisabled}
    >
      {children}
      <span>{title}</span>
    </button>
  );
});

Button.displayName = "Button";

export default Button;
