import { PropsWithChildren, useRef } from "react";
import { motion } from "framer-motion";

import classes from "./Backdrop.module.css";

interface IBackdrop extends PropsWithChildren {
  onClick: () => void;
}

export const Backdrop = (props: IBackdrop) => {
  const { children, onClick } = props;

  const ref = useRef<HTMLDivElement>(null);

  const closeHandler = (event: React.MouseEvent) => {
    if (event.target == ref.current) {
      onClick();
    }
  };

  return (
    <motion.div
      className={classes.Backdrop}
      ref={ref}
      onClick={closeHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className={classes.Hint}>Press ESC or click on backdrop to close</span>

      {children}
    </motion.div>
  );
};
