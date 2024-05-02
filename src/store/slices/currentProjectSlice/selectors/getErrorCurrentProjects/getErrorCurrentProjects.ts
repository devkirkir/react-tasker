import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getErrorCurrentProjects } from ".";

const initialState: DeepPartial<StateSchema> = {
  projects: { error: "error" },
};

describe("Current Projects | Selector getErrorCurrentProjects", () => {
  test("Get Error Current Projects", () => {
    expect(getErrorCurrentProjects(initialState as StateSchema)).toBe("error");
  });
});
