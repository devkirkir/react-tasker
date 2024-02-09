import classNames from "classnames";

import classes from "./Input.module.css";

type TInputTypes = "text" | "checkbox" | "email" | "number" | "password" | "radio" | "tel";
type TInputMode = "tel" | "email" | "numeric" | "text";

interface IProps {
  name: string;
  type: TInputTypes;
  required: boolean;
  defaultValue: string;
  isError?: boolean;
  placeholder?: string;
  defaultChecked?: boolean;
  inputmode?: TInputMode;
}

const Input = (props: IProps) => {
  const errorClassnames = classNames(classes.Input, {
    [classes.Error]: props.isError,
  });

  return <input className={errorClassnames} {...props} />;
};

export default Input;
