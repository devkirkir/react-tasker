import { AnimatePresence, motion } from "framer-motion";

import { SLIDE_BOTTOM_ANIM } from "consts/animations";

import classes from "./Notification.module.css";

interface NotificationProps {
  text: string;
  type: "error";
  isVisible: boolean;
}

const Notification = (props: NotificationProps) => {
  const { text, type, isVisible } = props;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={SLIDE_BOTTOM_ANIM}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, x: 300 }}
          key="modal-motion-key"
          className={`${classes.Notification} ${classes[type]}`}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
