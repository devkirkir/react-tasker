import { StateSchema } from "store/types/StateSchema";

export const getErrorProjects = (state: StateSchema) => state.projects.error;
