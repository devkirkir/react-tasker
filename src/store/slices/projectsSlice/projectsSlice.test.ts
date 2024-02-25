import { projectsActions, projectsReducer } from ".";
import { ProjectSchema, type ProjectsSliceSchema } from "./types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loading: "pending",
  error: false,
  currentProject: null,
};

describe("Projects | projectsSlice", () => {
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
