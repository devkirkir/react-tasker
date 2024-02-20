import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getFavoritedProjects } from ".";

describe("Projects | Selector getFavoritedProjects", () => {
  test("Get Favorited Projects", () => {
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

    expect(getFavoritedProjects(initialState as StateSchema)).toMatchObject([
      {
        id: "id2",
        projectTitle: "title",
        favorite: true,
        icon: {
          iconType: "circle",
          color: "#bc822b",
        },
      },
    ]);
  });
});
