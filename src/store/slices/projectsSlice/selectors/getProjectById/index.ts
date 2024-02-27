import { createSelector } from "@reduxjs/toolkit";

import { getAllProjects } from "../getAllProjects";

import { ProjectSchema } from "../../types";

export const getProjectById = (currentId: string) =>
  createSelector(getAllProjects, (projects: ProjectSchema[]) =>
    projects.filter((project) => project.id === currentId),
  );
