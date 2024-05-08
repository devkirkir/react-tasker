import { StateSchema } from "store/types/StateSchema";

export const getCurrentProjectId = (state: StateSchema) => state.currentProject?.currentProject?.id;
