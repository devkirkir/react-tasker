import { type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

import { motion } from "framer-motion";

import { Backdrop } from "../Backdrop";

import classes from "./Modal.module.css";

interface IProps extends PropsWithChildren {
  toggleHandler: () => void;
  portalContainer?: HTMLElement;
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
  const { children, toggleHandler, portalContainer = document.getElementById("modal") } = props;

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
        data-testid="Modal"
      >
        {children}
      </motion.div>
    </Backdrop>,
    portalContainer,
  );
};
