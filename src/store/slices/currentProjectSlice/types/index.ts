import { type ProjectSchema } from "store/slices/projectsSlice/types";
import { type LoadingStatuses } from "types";

export interface CurrentprojectsSliceSchema {
  currentProject: ProjectSchema;
  loading: LoadingStatuses;
  error: null | string;
}
