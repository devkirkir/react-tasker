export interface IProjects {
  id: string;
  projectTitle: string;
  favorite: boolean;
  icon: object;
}

export interface IProjectsSchema {
  projects: IProjects[];
  loading: "pending" | "fulfilled" | "rejected";
  error: boolean;
  currentProjectId: string | null;
}
