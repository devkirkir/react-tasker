import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { fetchAllProjects } from "store/slices/projectsSlice/servcies/fetchAllProjects";
import { getFavoritedProjects } from "store/slices/projectsSlice/selectors/getFavoritedProjects";
import { getBasicProjects } from "store/slices/projectsSlice/selectors/getBasicProjects";
import { getLoadingStatus } from "store/slices/projectsSlice/selectors/getLoadingStatus";
import type { ProjectSchema } from "store/slices/projectsSlice/types";

import FormAddProject from "components/Forms/FormAddProject";
import ExpandList from "components/shared/ExpandList";
import Button from "components/shared/Button";
import Modal from "components/shared/Modal";
import NavigateLink from "components/shared/NavigateLink";
import PlusIcon from "components/shared/Icons/PlusIcon";
import ProjectsSkeleton from "components/Skeletons/ProjectsSkeleton";

import { SLIDE_BOTTOM_ANIM } from "consts/animations";

import classes from "./Projects.module.css";

const Projects = () => {
  const dispatch = useAppDispatch();

  // состояние для модалки
  const [isModalOpen, setModalOpen] = useState(false);

  // вытаскиваем необходимые данные с помощью селекторов
  const loadingStatus = useAppSelector(getLoadingStatus);
  const basicsProjects = useAppSelector(getBasicProjects);
  const favoriteProjects = useAppSelector(getFavoritedProjects);

  // при первом рендере получаем все проекты с сервера
  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  const toggleModalHandler = () => {
    setModalOpen((isModalOpen) => !isModalOpen);
  };

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
    <section className={classes.Projects} data-testid="projects-page">
      {loadingStatus == "fulfilled" ? (
        <AnimatePresence>
          <motion.div
            variants={SLIDE_BOTTOM_ANIM}
            initial="hidden"
            animate="visible"
            exit="exit"
            key="projects-motion-key"
            className={classes.ProjectsList}
          >
            {!!favoriteProjects.length && (
              <ExpandList title="favorites" items={renderProjects(favoriteProjects)} />
            )}

            <ExpandList title="projects" items={renderProjects(basicsProjects)} />
          </motion.div>

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
        </AnimatePresence>
      ) : (
        <ProjectsSkeleton />
      )}
    </section>
  );
};

export default Projects;
