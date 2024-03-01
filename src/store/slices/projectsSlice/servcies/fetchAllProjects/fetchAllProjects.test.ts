import { fetchAllProjects } from ".";
import { projectsReducer } from "../..";
import { ProjectSchema, ProjectsSliceSchema } from "../../types";

const initialState: ProjectsSliceSchema = {
  projects: [],
  loadingProjects: "pending",
  error: null,
};

describe("Projects | Service fetchAllProjects", () => {
  test("fetchAllProjects.pending", () => {
    const state = projectsReducer(initialState, fetchAllProjects.pending);

    expect(state.loadingProjects).toBe("pending");
  });

  test("fetchAllProjects.rejected", () => {
    const state = projectsReducer(initialState, fetchAllProjects.rejected);

    expect(state.loadingProjects).toBe("rejected");
    expect(state.error).toBe("Unexpected error");
  });

  test("fetchAllProjects.fulfilled", () => {
    const mock: ProjectSchema = {
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "#de4fa5", iconType: "star" },
    };

    const state = projectsReducer(initialState, fetchAllProjects.fulfilled(mock, null));

    expect(state.loadingProjects).toBe("fulfilled");

    expect(state.projects).toMatchObject({
      id: "id",
      projectTitle: "title",
      favorite: false,
      icon: { color: "#de4fa5", iconType: "star" },
    });
  });
});
