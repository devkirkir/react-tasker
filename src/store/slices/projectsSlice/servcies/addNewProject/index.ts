import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProjects } from "../../types";

export const addNewProject = createAsyncThunk("addNewProject", async (data: IProjects) => {
  const response = await fetch("http://localhost:4000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await response.json();
});
