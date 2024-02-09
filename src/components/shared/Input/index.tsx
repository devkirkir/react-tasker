import classNames from "classnames";
import classes from "./Input.module.css";

type TInputTypes = "text" | "checkbox" | "email" | "number" | "password" | "radio" | "tel";
type TInputMode = "tel" | "email" | "numeric" | "text";

interface IProps {
  name: string;
  type: TInputTypes;
  required: boolean;
  defaultValue?: string;
  iserror?: number;
  placeholder?: string;
  defaultChecked?: boolean;
  inputMode?: TInputMode;
}

const Input = (props: IProps) => {
  const errorClassnames = classNames(classes.Input, {
    [classes.Error]: props.iserror,
  });

  return (
    <div className={classes.InputContainer}>
      <input className={errorClassnames} {...props} />
      <span className={classes.Label}>Label</span>
    </div>
  );
};

export default Input;
