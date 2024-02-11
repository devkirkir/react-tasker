import classNames from "classnames";
import classes from "./InputText.module.css";

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

const InputText = (props: InputTextProps) => {
  const { inputAttributes, isError, label } = props;

  const errorClassnames = classNames(classes.Input, {
    [classes.Error]: isError,
  });

  return (
    <div className={classes.InputContainer}>
      <input className={errorClassnames} {...inputAttributes} />
      {label && <span className={classes.Label}>{label}</span>}
    </div>
  );
};

export default InputText;
