import { StateSchema } from "store/types/StateSchema";

export const getLoadingStatus = (state: StateSchema) => state.currentProject.loading;
