import { PropsWithChildren } from "react";

import classes from "./FormErrorHandler.module.css";

const FormErrorHandler = ({ children }: PropsWithChildren) => {
  return <span className={classes.Error}>{children}</span>;
};

export default FormErrorHandler;
