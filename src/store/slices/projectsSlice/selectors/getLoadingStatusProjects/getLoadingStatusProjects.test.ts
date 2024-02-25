import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getLoadingStatusProjects } from ".";

describe("Projects | Selector getLoadingStatusProjects", () => {
  test("Pending", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        loading: "pending",
      },
    };

    expect(getLoadingStatusProjects(initialState as StateSchema)).toBe("pending");
  });

  test("Rejected", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        loading: "rejected",
      },
    };

    expect(getLoadingStatusProjects(initialState as StateSchema)).toBe("rejected");
  });

  test("Fulfilled", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        loading: "fulfilled",
      },
    };

    expect(getLoadingStatusProjects(initialState as StateSchema)).toBe("fulfilled");
  });
});
