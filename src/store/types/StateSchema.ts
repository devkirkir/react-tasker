import type { CurrentprojectsSliceSchema } from "store/slices/currentProjectSlice/types";
import type { ProjectsSliceSchema } from "store/slices/projectsSlice/types";

export interface StateSchema {
  projects: ProjectsSliceSchema;
  currentProject: CurrentprojectsSliceSchema;
}
