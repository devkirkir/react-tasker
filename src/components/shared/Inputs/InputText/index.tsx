import classNames from "classnames";
import classes from "./InputText.module.css";
import { forwardRef } from "react";

type InputTextTypes = "text" | "email" | "number" | "password" | "tel";
type InputTextMode = "tel" | "email" | "numeric" | "text";

interface InputTextAttributes {
  name: string;
  type: InputTextTypes;
  required: boolean;
  defaultValue?: string;
  placeholder?: string;
  inputMode?: InputTextMode;
}

interface InputTextProps {
  inputAttributes: InputTextAttributes;
  label?: string;
  isError?: boolean;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
  const { inputAttributes, isError, label } = props;

  const errorClassnames = classNames(classes.Input, {
    [classes.Error]: isError,
  });

  return (
    <div className={classes.InputContainer}>
      <input className={errorClassnames} {...inputAttributes} ref={ref} />
      {label && <span className={classes.Label}>{label}</span>}
    </div>
  );
});

InputText.displayName = "InputText";

export default InputText;
