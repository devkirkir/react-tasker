import { StateSchema } from "store/types/StateSchema";

export const getProjectBoards = (state: StateSchema) => state.currentProject.currentProject?.boards;
