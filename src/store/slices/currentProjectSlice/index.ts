import { createSlice } from "@reduxjs/toolkit";
import { CurrentProjectSliceSchema } from "./types";

const initialState: CurrentProjectSliceSchema = {
  currentProject: null,
};

const currentProjectSlice = createSlice({
  name: "currentProject",
  initialState,
  reducers: {
    setCurrentProject(state, { payload }) {
      state.currentProject = payload[0];
    },
  },
});

export const currentProjectActions = currentProjectSlice.actions;
export const currentProjectReducer = currentProjectSlice.reducer;
