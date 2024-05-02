import { StateSchema } from "store/types/StateSchema";

export const getErrorCurrentProjects = (state: StateSchema) => state.currentProject.error;
