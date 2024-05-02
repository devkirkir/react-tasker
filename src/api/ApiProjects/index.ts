import { ProjectBoards, type ProjectSchema } from "store/slices/projectsSlice/types";
import { CustomError } from "utils/CustomError";

export class ApiProjects {
  url: string;

  constructor(urlParam: string = "") {
    this.url = `http://localhost:4000/projects${urlParam}`;
  }

  async getAllProjects() {
    const response = await fetch(this.url);

    if (!response.ok) {
      throw new CustomError({ errorName: "HTTP_ERROR", message: "Error loading from the server" });
    }

    return await response.json();
  }

  async addNewProject(bodyData: ProjectSchema) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyData),
    });

    if (!response.ok) {
      throw new CustomError({ errorName: "HTTP_ERROR", message: "Project creation error" });
    }

    return await response.json();
  }

  async addNewTask(projectData: ProjectSchema) {
    const response = await fetch(this.url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      throw new CustomError({ errorName: "HTTP_ERROR", message: "Adding task error" });
    }

    return await response.json();
  }

  async likeProject(favorite: boolean) {
    const response = await fetch(this.url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        favorite,
      }),
    });

    if (!response.ok) {
      throw new CustomError({ errorName: "HTTP_ERROR", message: "Server error" });
    }

    return await response.json();
  }

  async changeBoardsOrder(boards: ProjectBoards[]) {
    const response = await fetch(this.url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        boards,
      }),
    });

    if (!response.ok) {
      throw new CustomError({ errorName: "HTTP_ERROR", message: "Server error" });
    }

    return await response.json();
  }
}
