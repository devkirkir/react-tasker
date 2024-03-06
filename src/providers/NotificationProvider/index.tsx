import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

export interface NotificationSchema {
  id: string;
  text: string;
  isVisible: boolean;
}

interface NotificationContextProps {
  notifications?: NotificationSchema[];
  setNotifications?: Dispatch<SetStateAction<NotificationSchema[]>>;
}

export const NotificationContext = createContext<NotificationContextProps>({});

const NotificationProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [notifications, setNotifications] = useState<NotificationSchema[]>([
    { text: "Error", isVisible: true, id: "id1" },
    { text: "Hello breakfast", isVisible: true, id: "id2" },
    { text: "suda ih", isVisible: true, id: "id3" },
    { text: "common bro", isVisible: true, id: "id4" },
  ]);

  const defaultProps = useMemo(() => ({ notifications, setNotifications }), [notifications]);

  return (
    <NotificationContext.Provider value={defaultProps}>{children}</NotificationContext.Provider>
  );
};

export default NotificationProvider;
