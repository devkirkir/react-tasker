import { useEffect, useState } from "react";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { projectsActions } from "store/slices/projectsSlice";
import { fetchAllProjects } from "store/slices/projectsSlice/servcies/fetchAllProjects";
import { getFavoritedProjects } from "store/slices/projectsSlice/selectors/getFavoritedProjects";
import { getBasicProjects } from "store/slices/projectsSlice/selectors/getBasicProjects";

import { ExpandList } from "components/shared/ExpandList";
import { Button } from "components/shared/Button";
import { Modal } from "components/Modal";

import { ELinkTypes, NavigateLink } from "components/shared/NavigateLink";
import type { IProjects } from "store/slices/projectsSlice/types";

import Plus from "../../../assets/icons/plus.svg";

import classes from "./Projects.module.css";

export const Projects = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  function toggleModalHandler() {
    setModalOpen((isModalOpen) => !isModalOpen);
  }

  const basicsProjects = useAppSelector(getBasicProjects);
  const favoriteProjects = useAppSelector(getFavoritedProjects);

  const chooseProject = (id: string) => dispatch(projectsActions.setCurrentProjectId(id));

  const renderProjects = (projects: IProjects[]) =>
    projects.map(({ projectTitle, id, icon }) => (
      <li key={`project-link-${id}`}>
        <NavigateLink
          id={id}
          value={projectTitle}
          path={id}
          icon={icon}
          type={ELinkTypes.SECONDARY}
          testid={`link-${projectTitle}-${id}`}
          callback={chooseProject}
        />
      </li>
    ));

  return (
    <section className={classes.Projects}>
      <div>
        {Boolean(favoriteProjects.length) && (
          <ExpandList title="favorites" items={renderProjects(favoriteProjects)} />
        )}

        <ExpandList title="projects" items={renderProjects(basicsProjects)} />
      </div>

      <>
        <Button title="Add Project" type="secondary" callback={toggleModalHandler}>
          <Plus />
        </Button>

        {isModalOpen && (
          <Modal isOpen={isModalOpen} toggleHandler={toggleModalHandler}>
            <span>hello</span>
          </Modal>
        )}
      </>
    </section>
  );
};
