import { addNewProject } from ".";
import { projectsReducer } from "../..";
import { EProjectsLoading, IProjects, type IProjectsSchema } from "../../types";

const initialState: IProjectsSchema = {
  projects: [],
  loading: EProjectsLoading.PENDING,
  error: false,
  currentProjectId: "id",
};

describe("Projects | Service addNewProject", () => {
  test("addNewProject.pending", () => {
    const state = projectsReducer(initialState, addNewProject.pending);

    expect(state.loading).toBe(EProjectsLoading.PENDING);
  });

  test("addNewProject.rejected", () => {
    const state = projectsReducer(initialState, addNewProject.rejected);

    expect(state.loading).toBe(EProjectsLoading.REJECTED);
  });

  test("addNewProject.fulfilled", () => {
    const mock: IProjects = {
      id: "project-id",
      projectTitle: "Post",
      favorite: false,
      icon: {
        iconType: "circle",
        color: "blue",
      },
    };

    const state = projectsReducer(initialState, addNewProject.fulfilled(mock, null, null));

    expect(state.loading).toBe(EProjectsLoading.FULFILLED);
    expect(state.projects[0]).toMatchObject({
      id: "project-id",
      projectTitle: "Post",
      favorite: false,
      icon: {
        iconType: "circle",
        color: "blue",
      },
    });
  });
});
