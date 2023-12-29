import { IStateSchema } from "store/types/StateSchema";

export const getAllProjects = (state: IStateSchema) => state.projects.projects;
