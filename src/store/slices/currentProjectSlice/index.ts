import { createSlice } from "@reduxjs/toolkit";
import { CurrentProjectSliceSchema } from "./types";

const initialState: CurrentProjectSliceSchema = {
  currentProject: {},
  loading: "pending",
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    setCurrentProject(state, { payload }) {
      state.currentProject = payload;
      state.loading = "fulfilled";
    },
  },
});

export const currentProjectActions = currentProjectSlice.actions;
export const currentProjectReducer = currentProjectSlice.reducer;
