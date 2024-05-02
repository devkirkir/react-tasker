import { createSlice } from "@reduxjs/toolkit";

import { changeBoardOrder } from "./services/changeBoardOrder";

import type { ProjectSchema } from "../projectsSlice/types";
import type { CurrentprojectsSliceSchema } from "./types";

const initialState: CurrentprojectsSliceSchema = {
  currentProject: {} as ProjectSchema,
  loading: "pending",
  error: null,
};

const currentprojectsSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    setCurrentProject(state, { payload }) {
      state.loading = "fulfilled";
      state.currentProject = payload;
    },
    removeError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(changeBoardOrder.fulfilled, (state, { payload }) => {
        state.currentProject = payload;
      })
      .addCase(changeBoardOrder.rejected, (state, { payload }) => {
        if (typeof payload === "string") {
          state.error = payload;
          return;
        }

        state.error = "Unexpected error";
      }),
});

export const currentProjectActions = currentprojectsSlice.actions;
export const currentProjectReducer = currentprojectsSlice.reducer;
