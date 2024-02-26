import type { CurrentProjectSliceSchema } from "store/slices/currentProjectSlice/types";
import type { ProjectsSliceSchema } from "store/slices/projectsSlice/types";

export interface StateSchema {
  projects: ProjectsSliceSchema;
  currentProject: CurrentProjectSliceSchema;
}
