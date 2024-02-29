import { createSlice } from "@reduxjs/toolkit";

import { fetchAllProjects } from "./servcies/fetchAllProjects";
import { addNewProject } from "./servcies/addNewProject";
import { likeProject } from "./servcies/likeProject";

import { type ProjectsSliceSchema } from "./types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: "pending",
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
        state.loading = "fulfilled";

        state.projects = payload;
      })
      .addCase(fetchAllProjects.rejected, (state, { payload }) => {
        state.loading = "rejected";

        if (typeof payload === "string") {
          state.error = payload;
        }
      })

      .addCase(addNewProject.fulfilled, (state, { payload }) => {
        state.loading = "fulfilled";
        state.projects.push(payload);
      })
      .addCase(addNewProject.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
          return;
        }

        state.error = "error";
      })

      .addCase(likeProject.fulfilled, (state, { payload }) => {
        state.loading = "fulfilled";
        state.projects = [
          ...state.projects.filter((project) => project.id !== payload.id),
          payload,
        ];
      })

      .addCase(likeProject.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
        }
      });
  },
});

export const projectsActions = projectSlice.actions;
export const projectsReducer = projectSlice.reducer;
