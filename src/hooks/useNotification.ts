import { useContext, useEffect, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import { NotificationContext } from "providers/NotificationProvider";

const useNotification = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);

  const [iteration, setIteration] = useState(0);

  const removeNotificationByInterval = () => {
    const visibleNotificationsLength = notifications.filter(
      (notification) => notification.isVisible,
    ).length;

    if (!visibleNotificationsLength) {
      setNotifications([]);

      return;
    }

    const withoutCurrentNotification = notifications.filter(
      (notification) => notification.id !== notifications[iteration].id,
    );

    setNotifications([
      { ...notifications[iteration], isVisible: false },
      ...withoutCurrentNotification,
    ]);

    setIteration((iteration) => iteration + 1);
  };

  useEffect(() => {
    if (iteration < notifications.length) {
      const interval = setInterval(removeNotificationByInterval, 1000);

      return () => clearInterval(interval);
    }

    setIteration(0);
  }, [iteration, notifications]);

  const addNotification = (text: string) => {
    const id = nanoid(4);

    setIteration(0);
    setNotifications((notifications) => [...notifications, { id, text, isVisible: true }]);
  };

  const closeNotification = (id: string) => {
    setIteration(0);
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return { notifications, addNotification, closeNotification };
};

export default useNotification;
