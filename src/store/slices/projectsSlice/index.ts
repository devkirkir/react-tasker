import { createSlice } from "@reduxjs/toolkit";

import { EProjectsLoading, type IProjectsSchema } from "./types";
import { fetchAllProjects } from "./servcies/fetchAllProjects";
import { addNewProject } from "./servcies/addNewProject";

const initialState: IProjectsSchema = {
  projects: [],
  loading: EProjectsLoading.FULFILLED,
  error: false,
  currentProjectId: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setCurrentProjectId(state, { payload }) {
      state.currentProjectId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = EProjectsLoading.PENDING;
      })
      .addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
        state.loading = EProjectsLoading.FULFILLED;
        state.projects = payload;
      })
      .addCase(fetchAllProjects.rejected, (state) => {
        state.loading = EProjectsLoading.REJECTED;
        state.error = true;
      })

      .addCase(addNewProject.pending, (state) => {
        state.loading = EProjectsLoading.PENDING;
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.loading = EProjectsLoading.FULFILLED;
        state.projects.push(action.payload);
      })
      .addCase(addNewProject.rejected, (state) => {
        state.loading = EProjectsLoading.REJECTED;
      });
  },
});

export const projectsActions = projectSlice.actions;
export const projectsReducer = projectSlice.reducer;
