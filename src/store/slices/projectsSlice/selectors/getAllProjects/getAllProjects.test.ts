import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "store/types/StateSchema";
import { getAllProjects } from ".";

describe("Projects | Selector getAllProjects", () => {
  test("Get All Projects", () => {
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

    expect(getAllProjects(initialState as StateSchema)).toMatchObject([
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
    ]);
  });
});
