import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectSchema } from "../../types";
import http from "utils/http";

export const addNewProject = createAsyncThunk("addNewProject", async (data: ProjectSchema) => {
  return await http("http://localhost:4000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
});
