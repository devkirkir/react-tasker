import { addNewProject } from ".";
import { projectsReducer } from "../..";
import { ProjectSchema, type ProjectsSliceSchema } from "../../types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: "pending",
  error: null,
};

describe("Projects | Service addNewProject", () => {
  // test("addNewProject.pending", () => {
  //   const state = projectsReducer(initialState, addNewProject.pending);

  //   expect(state.loading).toBe("pending");
  // });

  test("addNewProject.rejected", () => {
    const state = projectsReducer(initialState, addNewProject.rejected);

    expect(state.error).toBe("error");
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
    };

    const state = projectsReducer(initialState, addNewProject.fulfilled(mock, null, null));

    expect(state.loading).toBe("fulfilled");
    expect(state.projects[0]).toMatchObject({
      id: "project-id",
      projectTitle: "Post",
      favorite: false,
      icon: {
        iconType: "circle",
        color: "#bc822b",
      },
    });
  });
});
