import classes from "./InputSwitcher.module.css";

type InputSwitcherTypes = "radio" | "checkbox";

interface InputSwitcherAttributes {
  name: string;
  type: InputSwitcherTypes;
  required: boolean;
  defaultValue: string;
  defaultChecked?: boolean;
}

interface InputSwitcherProps {
  children: JSX.Element;
  inputAttributes: InputSwitcherAttributes;
  isError?: boolean;
}

const InputSwitcher = (props: InputSwitcherProps) => {
  const { inputAttributes, children } = props;

  return (
    <label className={classes.InputSwitcher}>
      {children}
      <input {...inputAttributes} />
    </label>
  );
};

export default InputSwitcher;
