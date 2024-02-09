import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = (props: PropsWithChildren) => {
  const { children } = props;
  const { pathname } = useLocation();

  const isAuth = true;

  const CHECK_APP_PAGE_PATHS =
    (isAuth && pathname == "/") ||
    (isAuth && pathname == "/app") ||
    (isAuth && pathname == "/app/");

  if (!isAuth && pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  if (CHECK_APP_PAGE_PATHS) {
    return <Navigate to="/app/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
