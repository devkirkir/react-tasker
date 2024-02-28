import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "utils/http";

interface LikeProject {
  id: string;
  favorite: boolean;
}

export const likeProject = createAsyncThunk("likeProject", (data: LikeProject) => {
  const { id, favorite } = data;

  const response = http(`http://localhost:4000/projects/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      favorite,
    }),
  });

  return response;
});
