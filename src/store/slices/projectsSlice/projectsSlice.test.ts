import { projectsActions, projectsReducer } from ".";
import { EProjectsLoading, IProjectsSchema } from "./types";

describe("Projects | projectsSlice", () => {
  test("Action setCurrentProjectId", () => {
    const initialState: IProjectsSchema = {
      projects: [],
      loading: EProjectsLoading.PENDING,
      error: false,
      currentProjectId: "id",
    };

    let state = projectsReducer(initialState, projectsActions.setCurrentProjectId("id2"));

    expect(state.currentProjectId).toBe("id2");

    state = projectsReducer(initialState, projectsActions.setCurrentProjectId("id23"));

    expect(state.currentProjectId).toBe("id23");
  });
});
