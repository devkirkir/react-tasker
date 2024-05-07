import { ShapedIcons } from "components/shared/ShapedIcon/config/ShapedIconConfig";
import type { Colors, LoadingStatuses } from "types";

export type ProjectIcon = {
  iconType: ShapedIcons;
  color?: Colors;
};

export interface TaskTags {
  color: Colors;
  label: string;
}

export interface BoardTask {
  id: string;
  title: string;
  description: string;
  tags: TaskTags[];
}

export interface ProjectBoards {
  id: string;
  title: string;
  tasks: BoardTask[];
}

export interface ProjectSchema {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: ProjectIcon;
  boards: ProjectBoards[];
}

export interface ProjectsSliceSchema {
  projects: ProjectSchema[];
  loadingProjects: LoadingStatuses;
  error: null | string;
}
