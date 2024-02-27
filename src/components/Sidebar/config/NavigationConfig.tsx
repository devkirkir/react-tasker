import { DashboardPageLazy as DashboardPage } from "pages/DashboardPage/DashboardPage.lazy";
import { ProjectsPageLazy as ProjectPage } from "pages/ProjectsPage/ProjectsPage.lazy";

import DashboardIcon from "components/shared/Icons/NavIcons/DashboardIcon";
import ProjectsIcon from "components/shared/Icons/NavIcons/ProjectsIcon";

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

// сформированный объект навигации, по которому строится SidebarNav
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
    icon: <ProjectsIcon />,
  },
};
