import { lazy } from "react";

export const ProjectPageLazy = lazy(async () => {
  return Promise.all([
    import("./ProjectPage"),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]).then(([moduleExports]) => moduleExports);
});
