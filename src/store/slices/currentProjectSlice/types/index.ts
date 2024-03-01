import { ProjectSchema } from "store/slices/projectsSlice/types";
import { LoadingStatuses } from "types";

export interface CurrentprojectsSliceSchema {
  currentProject: ProjectSchema;
  loading: LoadingStatuses;
}
