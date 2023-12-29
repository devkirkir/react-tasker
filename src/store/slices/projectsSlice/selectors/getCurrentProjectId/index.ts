import { IStateSchema } from "store/types/StateSchema";

export const getCurrentProjectId = (state: IStateSchema) => state.projects.currentProjectId;
