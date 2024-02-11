import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getCurrentProjectId } from ".";

describe("Projects | Selector getFavoritedProjects", () => {
  test("Get Project Id", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        currentProjectId: "project-id",
      },
    };

    expect(getCurrentProjectId(initialState as StateSchema)).toBe("project-id");
  });
});
