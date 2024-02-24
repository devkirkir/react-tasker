import { projectsActions, projectsReducer } from ".";
import { ProjectSchema, ProjectsLoadingStatuses, type ProjectsSliceSchema } from "./types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: ProjectsLoadingStatuses.PENDING,
  error: false,
  currentProjectId: null,
  currentProject: null,
};

describe("Projects | projectsSlice", () => {
  test("Action setCurrentProjectId", () => {
    let state = projectsReducer(initialState, projectsActions.setCurrentProjectId("id2"));

    expect(state.currentProjectId).toBe("id2");

    state = projectsReducer(initialState, projectsActions.setCurrentProjectId("id23"));

    expect(state.currentProjectId).toBe("id23");
  });

  test("Action setCurrentProject", () => {
    const mock: ProjectSchema = {
      id: "id",
      favorite: false,
      icon: { color: "#2a7de1", iconType: "circle" },
      projectTitle: "title",
    };

    const state = projectsReducer(initialState, projectsActions.setCurrentProject([mock]));

    expect(state.currentProject).toMatchObject({
      id: "id",
      favorite: false,
      icon: { color: "#2a7de1", iconType: "circle" },
      projectTitle: "title",
    });
  });
});
