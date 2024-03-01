import {
  ShapedIconsColors,
  ShapedIcons,
} from "components/shared/ShapedIcon/config/ShapedIconConfig";
import type { LoadingStatuses } from "types";

export type ProjectIcon = {
  iconType: ShapedIcons;
  color?: ShapedIconsColors;
};

export interface ProjectSchema {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: ProjectIcon;
}

export interface ProjectsSliceSchema {
  projects: ProjectSchema[];
  loadingProjects: LoadingStatuses;
  error: null | string;
}
