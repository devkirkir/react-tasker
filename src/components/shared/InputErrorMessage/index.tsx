import { PropsWithChildren } from "react";

import classes from "./InputErrorMessage.module.css";

const InputErrorMessage = ({ children }: PropsWithChildren) => {
  return <span className={classes.Error}>{children}</span>;
};

export default InputErrorMessage;
