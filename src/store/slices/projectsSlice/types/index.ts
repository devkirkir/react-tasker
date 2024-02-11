export enum ProjectsLoadingStatuses {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

type IconType = "star" | "circle" | "triangle" | "square";

export type ProjectIcon = {
  iconType: IconType;
  color: string;
};

export interface ProjectsSchema {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: ProjectIcon;
}

export interface ProjectsSliceSchema {
  projects: ProjectsSchema[];
  loading: ProjectsLoadingStatuses;
  error: boolean;
  currentProjectId: string | null;
}
