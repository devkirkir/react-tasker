import { createSelector } from "@reduxjs/toolkit";

import { getAllProjects } from "../../../projectsSlice/selectors/getAllProjects";

import { ProjectSchema } from "../../../projectsSlice/types";

export const getCurrentProject = (currentId: string) =>
  createSelector(getAllProjects, (projects: ProjectSchema[]) =>
    projects.filter((project) => project.id === currentId),
  );
