import { fetchAllProjects } from ".";
import { projectsReducer } from "../..";
import { ProjectsLoadingStatuses, ProjectSchema, ProjectsSliceSchema } from "../../types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: ProjectsLoadingStatuses.PENDING,
  error: false,
  currentProject: null,
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
    const mock: ProjectSchema = {
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "#de4fa5", iconType: "star" },
    };

    const state = projectsReducer(initialState, fetchAllProjects.fulfilled(mock, null));

    expect(state.loading).toBe(ProjectsLoadingStatuses.FULFILLED);

    expect(state.projects).toMatchObject({
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "#de4fa5", iconType: "star" },
    });
  });
});
