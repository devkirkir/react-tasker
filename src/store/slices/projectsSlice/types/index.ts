import {
  ShapedIconsColors,
  ShapedIcons,
} from "components/shared/ShapedIcon/config/ShapedIconConfig";

export type ProjectsLoadingStatuses = "pending" | "fulfilled" | "rejected";

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
}
