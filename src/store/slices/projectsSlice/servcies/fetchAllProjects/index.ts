import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiProjects } from "api/ApiProjects";

import { CustomError } from "utils/CustomError";

export const fetchAllProjects = createAsyncThunk(
  "fetchAllProjects",
  async (_, { rejectWithValue }) => {
    try {
      return await new ApiProjects().getAllProjects();
    } catch (error) {
      if (error instanceof CustomError) {
        return rejectWithValue(error.message);
      }
    }
  },
);
