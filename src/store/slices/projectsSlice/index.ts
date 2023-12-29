import { createSlice } from "@reduxjs/toolkit";

import type { IProjectsSchema } from "./types";
import { fetchAllProjects } from "./servcies/fetchAllProjects";

const initialState: IProjectsSchema = {
  projects: [],
  loading: "fulfilled",
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
        state.loading = "pending";
      })
      .addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
        state.loading = "fulfilled";
        state.projects = payload;
      })
      .addCase(fetchAllProjects.rejected, (state) => {
        state.loading = "rejected";
        state.error = true;
      });
  },
});

export const projectsActions = projectSlice.actions;
export const projectsReducer = projectSlice.reducer;
