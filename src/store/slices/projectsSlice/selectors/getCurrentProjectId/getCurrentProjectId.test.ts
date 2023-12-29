import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "store/types/StateSchema";
import { getCurrentProjectId } from ".";

describe("Projects | Selector getFavoritedProjects", () => {
  test("Get Project Id", () => {
    const initialState: DeepPartial<IStateSchema> = {
      projects: {
        currentProjectId: "project-id",
      },
    };

    expect(getCurrentProjectId(initialState as IStateSchema)).toBe("project-id");
  });
});
