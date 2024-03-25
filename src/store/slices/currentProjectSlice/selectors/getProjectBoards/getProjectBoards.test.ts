import { DeepPartial } from "@reduxjs/toolkit";
import { getProjectBoards } from ".";
import { type StateSchema } from "store/types/StateSchema";

describe("Current Project | Selector getProjectBoards", () => {
  test("Get Boards", () => {
    const initialState: DeepPartial<StateSchema> = {
      currentProject: {
        currentProject: {
          boards: [{ id: "id", title: "title" }],
        },
      },
    };

    expect(getProjectBoards(initialState as StateSchema)).toMatchObject([
      { id: "id", title: "title" },
    ]);
  });

  test("Get Empty Boards", () => {
    const initialState: DeepPartial<StateSchema> = {
      currentProject: {
        currentProject: {
          boards: [],
        },
      },
    };

    expect(getProjectBoards(initialState as StateSchema)).toEqual([]);
  });
});
