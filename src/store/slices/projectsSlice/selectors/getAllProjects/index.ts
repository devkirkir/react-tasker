import { StateSchema } from "store/types/StateSchema";

export const getAllProjects = (state: StateSchema) => state.projects.projects;
