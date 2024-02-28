import { ProjectSchema } from "store/slices/projectsSlice/types";
import { LoadingStatuses } from "types";

export interface CurrentProjectSliceSchema {
  currentProject: ProjectSchema;
  loading: LoadingStatuses;
}
