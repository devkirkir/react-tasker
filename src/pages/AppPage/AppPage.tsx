import NotificationProvider from "providers/NotificationProvider";

import Container from "components/Container";
import Sidebar from "components/Sidebar";
import NotificationHandler from "components/NotificationHandler";

const AppPage = () => {
  return (
    <>
      <Sidebar />

      <NotificationProvider>
        <Container />

        <NotificationHandler />
      </NotificationProvider>
    </>
  );
};

export default AppPage;
