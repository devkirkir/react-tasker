import { createSelector } from "@reduxjs/toolkit";
import { getAllProjects } from "../getAllProjects";

export const getBasicProjects = createSelector(
  getAllProjects,
  (projects) => projects?.filter((project) => !project.favorite),
);
