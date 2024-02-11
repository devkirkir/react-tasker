import { DashboardPageLazy as DashboardPage } from "pages/DashboardPage/DashboardPage.lazy";
import { ProjectsPageLazy as ProjectPage } from "pages/ProjectsPage/ProjectsPage.lazy";

import DashboardIcon from "../../../assets/icons/NavIcons/DashboardNavIcon.svg";
import ProjectsNavIcon from "../../../assets/icons/NavIcons/TaskNavIcon.svg";

export enum NavigationTitles {
  DASHBOARD = "Dashboard",
  PROJECTS = "Projects",
}

export enum NavigationPaths {
  DASHBOARD = "/app/dashboard",
  PROJECTS = "/app/projects",
}

interface NavigationObject {
  value: NavigationTitles;
  path: NavigationPaths;
  element: JSX.Element;
  icon: JSX.Element;
}

export const NavigationConfig: Record<NavigationTitles, NavigationObject> = {
  [NavigationTitles.DASHBOARD]: {
    value: NavigationTitles.DASHBOARD,
    path: NavigationPaths.DASHBOARD,
    element: <DashboardPage />,
    icon: <DashboardIcon />,
  },
  [NavigationTitles.PROJECTS]: {
    value: NavigationTitles.PROJECTS,
    path: NavigationPaths.PROJECTS,
    element: <ProjectPage />,
    icon: <ProjectsNavIcon />,
  },
};
