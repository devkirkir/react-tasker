import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiProjects } from "api/ApiProjects";

import { CustomError } from "utils/CustomError";

import type { ProjectSchema } from "../../types";

export const addNewProject = createAsyncThunk(
  "addNewProject",
  async (data: ProjectSchema, { rejectWithValue }) => {
    try {
      return await new ApiProjects().addNewProject(data);
    } catch (error) {
      if (error instanceof CustomError) {
        return rejectWithValue(error.message);
      }
    }
  },
);
