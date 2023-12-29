import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProjects = createAsyncThunk("fetchAllProjects", async () => {
  const response = await fetch("http://localhost:4000/projects");

  return await response.json();
});
