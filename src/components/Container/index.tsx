import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import classes from "./Container.module.css";

const Container = () => {
  return (
    <main className={classes.Container}>
      <Suspense fallback={"Container Suspense"}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Container;
