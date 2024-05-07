import { StateSchema } from "store/types/StateSchema";

export const getCurrentProject = (state: StateSchema) => state.currentProject?.currentProject;
