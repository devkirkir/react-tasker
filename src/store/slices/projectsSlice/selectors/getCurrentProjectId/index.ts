import { StateSchema } from "store/types/StateSchema";

export const getCurrentProjectId = (state: StateSchema) => state.projects.currentProjectId;
