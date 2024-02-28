import { createSlice } from "@reduxjs/toolkit";

import type { CurrentProjectSliceSchema } from "./types";
import type { ProjectSchema } from "../projectsSlice/types";

const initialState: CurrentProjectSliceSchema = {
  currentProject: {} as ProjectSchema,
  loading: "pending",
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    setCurrentProject(state, { payload }) {
      state.loading = "fulfilled";
      state.currentProject = payload;
    },
  },
});

export const currentProjectActions = currentProjectSlice.actions;
export const currentProjectReducer = currentProjectSlice.reducer;
