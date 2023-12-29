export enum EProjectsLoading {
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export interface IProjects {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: object;
}

export interface IProjectsSchema {
  projects: IProjects[];
  loading: EProjectsLoading;
  error: boolean;
  currentProjectId: string | null;
}
