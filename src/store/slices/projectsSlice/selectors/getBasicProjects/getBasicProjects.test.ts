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

    expect(getBasicProjects(initialState as StateSchema)).toMatchObject([
      {
        id: "id",
        projectTitle: "title",
        favorite: false,
        icon: {
          iconType: "star",
          color: "green",
        },
      },
    ]);
  });
});
