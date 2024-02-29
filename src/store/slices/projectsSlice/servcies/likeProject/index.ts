import { createAsyncThunk } from "@reduxjs/toolkit";

import { ApiProjects } from "api/ApiProjects";

import { CustomError } from "utils/CustomError";

interface LikeProject {
  id: string;
  favorite: boolean;
}

export const likeProject = createAsyncThunk(
  "likeProject",
  async (data: LikeProject, { rejectWithValue }) => {
    const { id, favorite } = data;

    try {
      return await new ApiProjects(`/${id}`).likeProject(favorite);
    } catch (error) {
      if (error instanceof CustomError) {
        return rejectWithValue(error.message);
      }
    }
  },
);
