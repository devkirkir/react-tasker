import {
  ShapedIconsColors,
  ShapedIcons,
} from "components/shared/ShapedIcon/config/ShapedIconConfig";

export enum ProjectsLoadingStatuses {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export type ProjectIcon = {
  iconType: ShapedIcons;
  color: ShapedIconsColors;
};

export interface ProjectSchema {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: ProjectIcon;
}

export interface ProjectsSliceSchema {
  projects: ProjectSchema[];
  loading: ProjectsLoadingStatuses;
  error: boolean;
  currentProjectId: string | null;
  currentProject: ProjectSchema | null;
}
