import { lazy } from "react";

export const DashboardPageLazy = lazy(async () => {
  return Promise.all([
    import("./DashboardPage"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports);
});
