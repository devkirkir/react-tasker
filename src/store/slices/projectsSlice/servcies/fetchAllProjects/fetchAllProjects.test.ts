import { fetchAllProjects } from ".";
import { projectsReducer } from "../..";
import { EProjectsLoading, IProjects, IProjectsSchema } from "../../types";

const initialState: IProjectsSchema = {
  projects: [],
  loading: EProjectsLoading.PENDING,
  error: false,
  currentProjectId: "id",
};

describe("Projects | Service fetchAllProjects", () => {
  test("fetchAllProjects.pending", () => {
    const state = projectsReducer(initialState, fetchAllProjects.pending);

    expect(state.loading).toBe(EProjectsLoading.PENDING);
  });

  test("fetchAllProjects.rejected", () => {
    const state = projectsReducer(initialState, fetchAllProjects.rejected);

    expect(state.loading).toBe(EProjectsLoading.REJECTED);
  });

  test("fetchAllProjects.fulfilled", () => {
    const mock: IProjects = {
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "green", iconType: "Star" },
    };

    const state = projectsReducer(initialState, fetchAllProjects.fulfilled(mock, null));

    expect(state.loading).toBe(EProjectsLoading.FULFILLED);

    expect(state.projects).toMatchObject({
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "green", iconType: "Star" },
    });
  });
});
