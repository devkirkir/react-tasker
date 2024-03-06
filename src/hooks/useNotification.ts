import { useContext, useEffect } from "react";

import { NotificationContext } from "providers/NotificationProvider";

const useNotification = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);

  const removeNotificationByInterval = () => {
    const [firstNotification, ...rest] = notifications;

    setNotifications([{ ...firstNotification, isVisible: false }, ...rest]);

    setTimeout(() => setNotifications(rest), 500);
  };

  useEffect(() => {
    if (notifications.length) {
      const interval = setInterval(removeNotificationByInterval, 3000);

      return () => clearInterval(interval);
    }
  }, [notifications]);

  const addNotification = (text: string) => {
    setNotifications((notifications) => [...notifications, { id: "iddd", text, isVisible: true }]);
  };

  const closeNotification = (id: string) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return { notifications, addNotification, closeNotification };
};

export default useNotification;
