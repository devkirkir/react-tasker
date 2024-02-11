import { type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

import { motion } from "framer-motion";

import Backdrop from "../Backdrop";

import classes from "./Modal.module.css";

interface ModalProps extends PropsWithChildren {
  toggleHandler: () => void;
  modalName?: string;
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

const Modal = (props: ModalProps) => {
  const {
    children,
    toggleHandler,
    modalName,
    portalContainer = document.getElementById("modal"),
  } = props;

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
    <Backdrop onMouseDown={toggleHandler}>
      <motion.div
        className={classes.Modal}
        variants={slideInAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        data-testid="Modal"
      >
        <span className={classes.Title}>{modalName}</span>
        {children}
      </motion.div>
    </Backdrop>,
    portalContainer,
  );
};

export default Modal;
