import { ProjectSchema } from "store/slices/projectsSlice/types";

export interface CurrentProjectSliceSchema {
  currentProject: ProjectSchema | null;
}
