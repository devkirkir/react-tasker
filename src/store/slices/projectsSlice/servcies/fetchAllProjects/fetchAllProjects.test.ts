import { fetchAllProjects } from ".";
import { projectsReducer } from "../..";
import { ProjectsLoadingStatuses, ProjectsSchema, ProjectsSliceSchema } from "../../types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: ProjectsLoadingStatuses.PENDING,
  error: false,
  currentProjectId: "id",
};

describe("Projects | Service fetchAllProjects", () => {
  test("fetchAllProjects.pending", () => {
    const state = projectsReducer(initialState, fetchAllProjects.pending);

    expect(state.loading).toBe(ProjectsLoadingStatuses.PENDING);
  });

  test("fetchAllProjects.rejected", () => {
    const state = projectsReducer(initialState, fetchAllProjects.rejected);

    expect(state.loading).toBe(ProjectsLoadingStatuses.REJECTED);
  });

  test("fetchAllProjects.fulfilled", () => {
    const mock: ProjectsSchema = {
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "green", iconType: "star" },
    };

    const state = projectsReducer(initialState, fetchAllProjects.fulfilled(mock, null));

    expect(state.loading).toBe(ProjectsLoadingStatuses.FULFILLED);

    expect(state.projects).toMatchObject({
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "green", iconType: "star" },
    });
  });
});
