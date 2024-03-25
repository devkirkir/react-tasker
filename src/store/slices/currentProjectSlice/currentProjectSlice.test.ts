import { currentProjectActions, currentProjectReducer } from ".";
import type { ProjectSchema } from "../projectsSlice/types";
import type { CurrentprojectsSliceSchema } from "./types";

const initialState: CurrentprojectsSliceSchema = {
  currentProject: null,
  loading: "fulfilled",
};

describe("CurrentProject | currentprojectsSlice", () => {
  test("Action setCurrentProject", () => {
    const mock: ProjectSchema = {
      id: "id",
      favorite: false,
      icon: { color: "#2a7de1", iconType: "circle" },
      projectTitle: "title",
      boards: [
        {
          id: "1",
          title: "Title",
          tasks: [
            {
              id: "item-1",
              title: "Title of the task",
              description: "Description of the task",
              tags: [{ color: "#7864f1", label: "App" }],
            },
          ],
        },
      ],
    };

    const state = currentProjectReducer(
      initialState,
      currentProjectActions.setCurrentProject([mock]),
    );

    expect(state.currentProject).toMatchObject([
      {
        id: "id",
        favorite: false,
        icon: { color: "#2a7de1", iconType: "circle" },
        projectTitle: "title",
        boards: [
          {
            id: "1",
            title: "Title",
            tasks: [
              {
                id: "item-1",
                title: "Title of the task",
                description: "Description of the task",
                tags: [{ color: "#7864f1", label: "App" }],
              },
            ],
          },
        ],
      },
    ]);
  });
});
