import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getLoadingStatus } from ".";

describe("Projects | Selector getLoadingStatus", () => {
  test("Pending", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        loadingProjects: "pending",
      },
    };

    expect(getLoadingStatus(initialState as StateSchema)).toBe("pending");
  });

  test("Rejected", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        loadingProjects: "rejected",
      },
    };

    expect(getLoadingStatus(initialState as StateSchema)).toBe("rejected");
  });

  test("Fulfilled", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        loadingProjects: "fulfilled",
      },
    };

    expect(getLoadingStatus(initialState as StateSchema)).toBe("fulfilled");
  });
});
