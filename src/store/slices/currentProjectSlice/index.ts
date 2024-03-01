import { createSlice } from "@reduxjs/toolkit";

import type { CurrentprojectsSliceSchema } from "./types";
import type { ProjectSchema } from "../projectsSlice/types";

const initialState: CurrentprojectsSliceSchema = {
  currentProject: {} as ProjectSchema,
  loading: "pending",
};

const currentprojectsSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    setCurrentProject(state, { payload }) {
      state.loading = "fulfilled";
      state.currentProject = payload;
    },
  },
});

export const currentProjectActions = currentprojectsSlice.actions;
export const currentProjectReducer = currentprojectsSlice.reducer;
