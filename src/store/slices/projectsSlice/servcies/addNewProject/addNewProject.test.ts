import { addNewProject } from ".";
import { projectsReducer } from "../..";
import { ProjectSchema, type ProjectsSliceSchema } from "../../types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loadingProjects: "pending",
  error: null,
};

describe("Projects | Service addNewProject", () => {
  test("addNewProject.rejected", () => {
    const state = projectsReducer(initialState, addNewProject.rejected);

    expect(state.error).toBe("Unexpected error");
  });

  test("addNewProject.fulfilled", () => {
    const mock: ProjectSchema = {
      id: "project-id",
      projectTitle: "Post",
      favorite: false,
      icon: {
        iconType: "circle",
        color: "#bc822b",
      },
      boards: [
        {
          id: "1",
          title: "Title",
          tasks: [
            {
              id: "item-1",
              title: "Title of the task",
              description: "Description of the task",
              tags: [{ color: "#7864f1", label: "App" }],
            },
          ],
        },
      ],
    };

    const state = projectsReducer(initialState, addNewProject.fulfilled(mock, null, null));

    expect(state.projects[0]).toMatchObject({
      id: "project-id",
      projectTitle: "Post",
      favorite: false,
      icon: {
        iconType: "circle",
        color: "#bc822b",
      },
      boards: [
        {
          id: "1",
          title: "Title",
          tasks: [
            {
              id: "item-1",
              title: "Title of the task",
              description: "Description of the task",
              tags: [{ color: "#7864f1", label: "App" }],
            },
          ],
        },
      ],
    });
  });
});
