import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getErrorProjects } from ".";

const initialState: DeepPartial<StateSchema> = {
  projects: { error: "error" },
};

describe("Projects | Selector getErrorProjects", () => {
  test("Get Error Projects", () => {
    expect(getErrorProjects(initialState as StateSchema)).toBe("error");
  });
});
