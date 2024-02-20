import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getBasicProjects } from ".";

describe("Projects | Selector getBasicProjects", () => {
  test("Get Basic Projects", () => {
    const initialState: DeepPartial<StateSchema> = {
      projects: {
        projects: [
          {
            id: "id",
            projectTitle: "title",
            favorite: false,
            icon: {
              iconType: "star",
              color: "#bc822b",
            },
          },
          {
            id: "id2",
            projectTitle: "title",
            favorite: true,
            icon: {
              iconType: "circle",
              color: "#bc822b",
            },
          },
        ],
      },
    };

    expect(getBasicProjects(initialState as StateSchema)).toMatchObject([
      {
        id: "id",
        projectTitle: "title",
        favorite: false,
        icon: {
          iconType: "star",
          color: "#bc822b",
        },
      },
    ]);
  });
});
