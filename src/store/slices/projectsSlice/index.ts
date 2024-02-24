import { createSlice } from "@reduxjs/toolkit";

import { fetchAllProjects } from "./servcies/fetchAllProjects";
import { addNewProject } from "./servcies/addNewProject";

import { ProjectsLoadingStatuses, type ProjectsSliceSchema } from "./types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: ProjectsLoadingStatuses.FULFILLED,
  error: false,
  currentProjectId: null,
  currentProject: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setCurrentProjectId(state, { payload }) {
      state.currentProjectId = payload;
    },
    setCurrentProject(state, { payload }) {
      state.currentProject = payload[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = ProjectsLoadingStatuses.PENDING;
      })
      .addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
        state.loading = ProjectsLoadingStatuses.FULFILLED;
        state.projects = payload;
      })
      .addCase(fetchAllProjects.rejected, (state) => {
        state.loading = ProjectsLoadingStatuses.REJECTED;
        state.error = true;
      })

      .addCase(addNewProject.pending, (state) => {
        state.loading = ProjectsLoadingStatuses.PENDING;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.loading = ProjectsLoadingStatuses.FULFILLED;
        state.projects.push(action.payload);
      })
      .addCase(addNewProject.rejected, (state) => {
        state.loading = ProjectsLoadingStatuses.REJECTED;
      });
  },
});

export const projectsActions = projectSlice.actions;
export const projectsReducer = projectSlice.reducer;
