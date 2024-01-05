export enum EProjectsLoading {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

type TIconType = "star" | "circle" | "triangle" | "square";

export type TProjectIcon = {
  iconType: TIconType;
  color: string;
};

export interface IProjects {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: TProjectIcon;
}

export interface IProjectsSchema {
  projects: IProjects[];
  loading: EProjectsLoading;
  error: boolean;
  currentProjectId: string | null;
}
