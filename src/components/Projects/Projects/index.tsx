import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { fetchAllProjects } from "store/slices/projectsSlice/servcies/fetchAllProjects";
import { getFavoritedProjects } from "store/slices/projectsSlice/selectors/getFavoritedProjects";
import { getBasicProjects } from "store/slices/projectsSlice/selectors/getBasicProjects";

import FormAddProject from "components/Forms/FormAddProject";
import ExpandList from "components/shared/ExpandList";
import Button from "components/shared/Button";
import Modal from "components/shared/Modal";
import NavigateLink from "components/shared/NavigateLink";

import PlusIcon from "components/shared/Icons/PlusIcon";

import type { ProjectSchema } from "store/slices/projectsSlice/types";

import classes from "./Projects.module.css";

const Projects = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  const toggleModalHandler = () => {
    setModalOpen((isModalOpen) => !isModalOpen);
  };

  const basicsProjects = useAppSelector(getBasicProjects);
  const favoriteProjects = useAppSelector(getFavoritedProjects);

  const renderProjects = (projects: ProjectSchema[]) =>
    projects.map(({ projectTitle, id, icon }) => (
      <li key={`project-link-${id}`}>
        <NavigateLink
          value={projectTitle}
          path={id}
          icon={icon}
          type="secondary"
          testid={`link-${projectTitle}-${id}`}
        />
      </li>
    ));

  return (
    <section className={classes.Projects}>
      <div className={classes.ProjectsList}>
        {!!favoriteProjects.length && (
          <ExpandList title="favorites" items={renderProjects(favoriteProjects)} />
        )}

        <ExpandList title="projects" items={renderProjects(basicsProjects)} />
      </div>

      <div className={classes.ProjectsBottom}>
        <Button title="Add Project" type="secondary" callback={toggleModalHandler}>
          <PlusIcon />
        </Button>

        <AnimatePresence>
          {isModalOpen && (
            <Modal toggleHandler={toggleModalHandler} modalName="Add Project">
              <FormAddProject toggleHandler={toggleModalHandler} />
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
