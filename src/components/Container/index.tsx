import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import classes from "./Container.module.css";

export const Container = () => {
  return (
    <main className={classes.Container}>
      <Suspense fallback={"Suspense App Container"}>
        <Outlet />
      </Suspense>
    </main>
  );
};
