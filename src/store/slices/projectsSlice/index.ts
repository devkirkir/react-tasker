import { createSlice } from "@reduxjs/toolkit";

import { fetchAllProjects } from "./servcies/fetchAllProjects";
import { addNewProject } from "./servcies/addNewProject";
import { likeProject } from "./servcies/likeProject";
import { addNewTask } from "./servcies/addNewTask";

import { type ProjectsSliceSchema } from "./types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loadingProjects: "pending",
  error: null,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    removeError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProjects.pending, (state) => {
        state.loadingProjects = "pending";
      })
      .addCase(fetchAllProjects.fulfilled, (state, { payload }) => {
        state.loadingProjects = "fulfilled";
        state.projects = payload;
        state.error = null;
      })
      .addCase(fetchAllProjects.rejected, (state, { payload }) => {
        state.loadingProjects = "rejected";

        if (typeof payload === "string") {
          state.error = payload;
          return;
        }

        state.error = "Unexpected error";
      })

      .addCase(addNewProject.fulfilled, (state, { payload }) => {
        state.projects.push(payload);
      })
      .addCase(addNewProject.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
          return;
        }

        state.error = "Unexpected error";
      })

      .addCase(likeProject.fulfilled, (state, { payload }) => {
        state.projects = [
          ...state.projects.filter((project) => project.id !== payload.id),
          payload,
        ];
      })

      .addCase(likeProject.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
          return;
        }

        state.error = "Unexpected error";
      })

      .addCase(addNewTask.fulfilled, (state, { payload }) => {
        state.projects = [
          ...state.projects.filter((project) => project.id !== payload.id),
          payload,
        ];
      })

      .addCase(addNewTask.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
          return;
        }

        state.error = "Unexpected error";
      });
  },
});

export const projectsActions = projectsSlice.actions;
export const projectsReducer = projectsSlice.reducer;
