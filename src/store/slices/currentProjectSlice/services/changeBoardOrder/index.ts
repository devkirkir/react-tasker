import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiProjects } from "api/ApiProjects";
import { ProjectBoards } from "store/slices/projectsSlice/types";
import { CustomError } from "utils/CustomError";

export interface ChangeBoardOrderData {
  boards: ProjectBoards[];
  projectId: string;
}

export const changeBoardOrder = createAsyncThunk(
  "changeBoardOrder",
  async (data: ChangeBoardOrderData, { rejectWithValue }) => {
    try {
      const { projectId, boards } = data;

      return await new ApiProjects(`/${projectId}`).changeBoardsOrder(boards);
    } catch (error) {
      if (error instanceof CustomError) {
        return rejectWithValue(error.message);
      }
    }
  },
);
