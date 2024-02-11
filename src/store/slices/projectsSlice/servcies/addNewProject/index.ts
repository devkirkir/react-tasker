import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectsSchema } from "../../types";

export const addNewProject = createAsyncThunk("addNewProject", async (data: ProjectsSchema) => {
  const response = await fetch("http://localhost:4000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
});
