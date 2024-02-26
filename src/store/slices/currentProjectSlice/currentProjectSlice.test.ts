import { currentProjectActions, currentProjectReducer } from ".";
import type { ProjectSchema } from "../projectsSlice/types";
import type { CurrentProjectSliceSchema } from "./types";

const initialState: CurrentProjectSliceSchema = {
  currentProject: null,
};

describe("CurrentProject | currentProjectSlice", () => {
  test("Action setCurrentProject", () => {
    const mock: ProjectSchema = {
      id: "id",
      favorite: false,
      icon: { color: "#2a7de1", iconType: "circle" },
      projectTitle: "title",
    };

    const state = currentProjectReducer(
      initialState,
      currentProjectActions.setCurrentProject([mock]),
    );

    expect(state.currentProject).toMatchObject({
      id: "id",
      favorite: false,
      icon: { color: "#2a7de1", iconType: "circle" },
      projectTitle: "title",
    });
  });
});