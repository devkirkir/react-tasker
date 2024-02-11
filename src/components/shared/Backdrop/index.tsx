import { PropsWithChildren, useRef } from "react";

import { motion } from "framer-motion";

import classes from "./Backdrop.module.css";

interface BackdropProps extends PropsWithChildren {
  onMouseDown: () => void;
}

const Backdrop = (props: BackdropProps) => {
  const { children, onMouseDown } = props;

  const ref = useRef<HTMLDivElement>(null);

  const closeHandler = (event: React.MouseEvent) => {
    if (event.target == ref.current) {
      onMouseDown();
    }
  };

  return (
    <motion.div
      className={classes.Backdrop}
      ref={ref}
      onMouseDown={closeHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      data-testid="Backdrop"
    >
      <span className={classes.Hint}>Press ESC or click on backdrop to close</span>

      {children}
    </motion.div>
  );
};

export default Backdrop;
