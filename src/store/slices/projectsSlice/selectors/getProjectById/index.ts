import { createSelector } from "@reduxjs/toolkit";

import { getAllProjects } from "../getAllProjects";

import { ProjectSchema } from "../../types";

export const getProjectById = (currentId: string) =>
  createSelector(getAllProjects, (projects: ProjectSchema[]) =>
    projects.find((project) => project.id === currentId),
  );
