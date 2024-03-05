import { useContext, useEffect } from "react";

import { NotificationContext } from "providers/NotificationProvider";

const useNotification = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);

  useEffect(() => {
    if (notifications.length) {
      const interval = setInterval(() => {
        const [firstNotification, ...rest] = notifications;

        setNotifications([...rest, { text: firstNotification.text, isVisible: false }]);

        setTimeout(() => setNotifications([...rest]), 500);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [notifications]);

  const addNotification = (text: string) => {
    setNotifications((notifications) => [...notifications, { text, isVisible: true }]);
  };

  return { notifications, addNotification };
};

export default useNotification;
