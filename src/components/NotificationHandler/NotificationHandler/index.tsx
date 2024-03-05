import { createPortal } from "react-dom";

import useNotification from "hooks/useNotification";

import Notification from "../Notification";

import classes from "./NotificationHandler.module.css";

interface NotificationHandlerProps {
  portalContainer?: HTMLElement;
}

const NotificationHandler = (props: NotificationHandlerProps) => {
  const { portalContainer = document.getElementById("notification") } = props;

  const { notifications } = useNotification();

  const renderNotifications = () =>
    notifications.map(({ text, isVisible }, index) => (
      <Notification text={text} type="error" key={`notification-${index}`} isVisible={isVisible} />
    ));

  return portalContainer
    ? createPortal(
        <div className={classes.NotificationHandler}>
          {Boolean(notifications.length) && renderNotifications()}
        </div>,
        portalContainer,
      )
    : null;
};

export default NotificationHandler;
