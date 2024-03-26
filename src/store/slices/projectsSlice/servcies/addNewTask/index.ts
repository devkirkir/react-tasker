import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiProjects } from "api/ApiProjects";
import { CustomError } from "utils/CustomError";
import { type ProjectSchema } from "../../types";

export interface AddNewTaskData {
  taskId: string;
  newTask: ProjectSchema;
}

export const addNewTask = createAsyncThunk(
  "addNewTask",
  async (data: AddNewTaskData, { rejectWithValue }) => {
    try {
      return await new ApiProjects(`/${data.taskId}`).addNewTask(data.newTask);
    } catch (error) {
      if (error instanceof CustomError) {
        return rejectWithValue(error.message);
      }
    }
  },
);
