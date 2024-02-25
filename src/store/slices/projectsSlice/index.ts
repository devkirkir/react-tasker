import { createSlice } from "@reduxjs/toolkit";

import { fetchAllProjects } from "./servcies/fetchAllProjects";
import { addNewProject } from "./servcies/addNewProject";

import { type ProjectsSliceSchema } from "./types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: "pending",
  error: false,
  currentProject: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setCurrentProject(state, { payload }) {
      state.currentProject = payload[0];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
        state.loading = "fulfilled";
        state.projects = payload;
      })
      .addCase(fetchAllProjects.rejected, (state) => {
        state.loading = "rejected";
        state.error = true;
      })

      .addCase(addNewProject.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.projects.push(action.payload);
      })
      .addCase(addNewProject.rejected, (state) => {
        state.loading = "rejected";
      });
  },
});

export const projectsActions = projectSlice.actions;
export const projectsReducer = projectSlice.reducer;
