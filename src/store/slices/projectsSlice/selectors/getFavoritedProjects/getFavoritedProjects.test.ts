import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "store/types/StateSchema";
import { getFavoritedProjects } from ".";

describe("Projects | Selector getFavoritedProjects", () => {
  test("Get Favorited Projects", () => {
    const initialState: DeepPartial<IStateSchema> = {
      projects: {
        projects: [
          {
            id: "id",
            projectTitle: "title",
            favorite: false,
            icon: {
              iconType: "star",
              color: "green",
            },
          },
          {
            id: "id2",
            projectTitle: "title",
            favorite: true,
            icon: {
              iconType: "circle",
              color: "green",
            },
          },
        ],
      },
    };

    expect(getFavoritedProjects(initialState as IStateSchema)).toMatchObject([
      {
        id: "id2",
        projectTitle: "title",
        favorite: true,
        icon: {
          iconType: "circle",
          color: "green",
        },
      },
    ]);
  });
});
