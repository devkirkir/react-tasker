import { lazy } from "react";

export const ProjectsPageLazy = lazy(async () => {
  return Promise.all([
    import("./ProjectsPage"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([moduleExports]) => moduleExports);
});
