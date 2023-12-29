import { IStateSchema } from "store/types/StateSchema";

export const getProjectId = (state: IStateSchema) => state.projects.currentProjectId;
