import Container from "components/Container";
import { Sidebar } from "components/Sidebar";
import { NotificationHandler } from "components/NotificationHandler";

const AppPage = () => {
  return (
    <>
      <Sidebar />

      <Container />

      <NotificationHandler />
    </>
  );
};

export default AppPage;
