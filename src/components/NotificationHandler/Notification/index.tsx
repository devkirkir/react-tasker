import { AnimatePresence, motion } from "framer-motion";

import useNotification from "hooks/useNotification";

import type { NotificationSchema } from "providers/NotificationProvider";
import { SLIDE_BOTTOM_ANIM } from "consts/animations";

import classes from "./Notification.module.css";

interface NotificationProps extends NotificationSchema {
  type: "error";
}

const Notification = (props: NotificationProps) => {
  const { id, text, type, isVisible } = props;

  const { closeNotification } = useNotification();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={SLIDE_BOTTOM_ANIM}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          key="modal-motion-key"
          className={`${classes.Notification} ${classes[type]}`}
          onClick={() => closeNotification(id)}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
