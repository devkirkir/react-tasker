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
    notifications.map((props, index) => (
      <Notification type="error" key={`notification-${index}`} {...props} />
    ));

  return portalContainer
    ? createPortal(
        <div className={classes.NotificationHandler}>
          {!!notifications.length && renderNotifications()}
        </div>,
        portalContainer,
      )
    : null;
};

export default NotificationHandler;
