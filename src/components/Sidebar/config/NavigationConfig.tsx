import { DashboardPageLazy as DashboardPage } from "pages/DashboardPage/DashboardPage.lazy";
import { ProjectsPageLazy as ProjectPage } from "pages/ProjectsPage/ProjectsPage.lazy";

import DashboardIcon from "../../../assets/icons/DashboardNavIcon.svg";
import ProjectsNavIcon from "../../../assets/icons/TaskNavIcon.svg";

export enum ENavigationValues {
  DASHBOARD = "Dashboard",
  PROJECTS = "Projects",
}

export enum ENavigationPaths {
  DASHBOARD = "/app/dashboard",
  PROJECTS = "/app/projects",
}

interface INavigationObject {
  value: ENavigationValues;
  path: ENavigationPaths;
  element: JSX.Element;
  icon: JSX.Element;
}

export const NavigationConfig: Record<ENavigationValues, INavigationObject> = {
  [ENavigationValues.DASHBOARD]: {
    value: ENavigationValues.DASHBOARD,
    path: ENavigationPaths.DASHBOARD,
    element: <DashboardPage />,
    icon: <DashboardIcon />,
  },
  [ENavigationValues.PROJECTS]: {
    value: ENavigationValues.PROJECTS,
    path: ENavigationPaths.PROJECTS,
    element: <ProjectPage />,
    icon: <ProjectsNavIcon />,
  },
};
