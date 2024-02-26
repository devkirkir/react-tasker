import { DeepPartial } from "@reduxjs/toolkit";
import { getLoadingStatus } from ".";
import { StateSchema } from "store/types/StateSchema";

describe("Current Project | Selector getLoadingStatus", () => {
  test("Pending", () => {
    const initialState: DeepPartial<StateSchema> = {
      currentProject: {
        loading: "pending",
      },
    };

    expect(getLoadingStatus(initialState as StateSchema)).toBe("pending");
  });

  test("Rejected", () => {
    const initialState: DeepPartial<StateSchema> = {
      currentProject: {
        loading: "rejected",
      },
    };

    expect(getLoadingStatus(initialState as StateSchema)).toBe("rejected");
  });

  test("Fulfilled", () => {
    const initialState: DeepPartial<StateSchema> = {
      currentProject: {
        loading: "fulfilled",
      },
    };

    expect(getLoadingStatus(initialState as StateSchema)).toBe("fulfilled");
  });
});
