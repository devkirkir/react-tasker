import { type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

import { Backdrop } from "../Backdrop";

import classes from "./Modal.module.css";

interface IProps extends PropsWithChildren {
  isOpen: boolean;
  toggleHandler: () => void;
}

const slideInAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 300,
  },
};

export const Modal = (props: IProps) => {
  const { children, toggleHandler } = props;

  const onKeyDownHandle = ({ key }: KeyboardEvent) => {
    if (key === "Escape") toggleHandler();
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDownHandle);

    return () => {
      document.removeEventListener("keydown", onKeyDownHandle);
    };
  }, []);

  return createPortal(
    <Backdrop onClick={toggleHandler}>
      <motion.div
        className={classes.Modal}
        variants={slideInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>,
    document.getElementById("modal"),
  );
};
