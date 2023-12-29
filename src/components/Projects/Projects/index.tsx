import { useEffect } from "react";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { projectsActions } from "store/slices/projectsSlice";
import { fetchAllProjects } from "store/slices/projectsSlice/servcies/fetchAllProjects";
import { getFavoritedProjects } from "store/slices/projectsSlice/selectors/getFavoritedProjects";
import { getBasicsProjects } from "store/slices/projectsSlice/selectors/getBasicsProjects";

import type { IProjects } from "store/slices/projectsSlice/types";

import ExpandList from "components/shared/ExpandList";
import { ELinkTypes, NavigateLink } from "components/shared/NavigateLink";

import classes from "./Projects.module.css";

export const Projects = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  const basicsProjects = useAppSelector(getBasicsProjects);
  const favoriteProjects = useAppSelector(getFavoritedProjects);

  const chooseProject = (id: string) => {
    dispatch(projectsActions.setCurrentProjectId(id));
  };

  const renderProjects = (projects: IProjects[]) =>
    projects.map(({ projectTitle, id }) => (
      <li key={`project-link-${id}`}>
        <NavigateLink
          id={id}
          value={projectTitle}
          path={id}
          type={ELinkTypes.SECONDARY}
          testid={`link-${projectTitle}-${id}`}
          callback={chooseProject}
        />
      </li>
    ));

  return (
    <section className={classes.Projects}>
      {favoriteProjects.length !== 0 && (
        <ExpandList title="favorites" items={renderProjects(favoriteProjects)} />
      )}

      <ExpandList title="projects" items={renderProjects(basicsProjects)} />
    </section>
  );
};
