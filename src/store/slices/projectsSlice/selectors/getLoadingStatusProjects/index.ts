import { StateSchema } from "store/types/StateSchema";

export const getLoadingStatusProjects = (state: StateSchema) => state.projects.loading;
