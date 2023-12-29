import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { Projects } from "components/Projects";
import { Suspense } from "react";

const ProjectsPage = () => {
  return (
    <>
      <Projects />

      <Suspense fallback={"sosat..."}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ProjectsPage;
