import { Outlet } from "react-router-dom";

import { Projects } from "components/Projects";
import { Suspense } from "react";

const ProjectsPage = () => {
  return (
    <>
      <Projects />

      <Suspense fallback={"Suspense Projects"}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ProjectsPage;
