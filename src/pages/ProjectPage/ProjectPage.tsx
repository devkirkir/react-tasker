import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { currentProjectActions } from "store/slices/currentProjectSlice";
import { getProjectById } from "store/slices/projectsSlice/selectors/getProjectById";
import { getLoadingStatus } from "store/slices/currentProjectSlice/selectors/getLoadingStatus";

import ProjectHeader from "components/ProjectHeader";
import ProjectHeaderSkeleton from "components/Skeletons/ProjectHeaderSkeleton";
import Boards from "components/Boards";

import classes from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();

  const currentProject = useAppSelector(getProjectById(projectId));
  const loadingStatus = useAppSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(currentProjectActions.setCurrentProject(currentProject));
  }, [currentProject, loadingStatus]);

  return (
    <section className={classes.ProjectPage}>
      {loadingStatus === "fulfilled" ? (
        <>
          <ProjectHeader projectData={currentProject} />

          <Boards />
        </>
      ) : (
        <ProjectHeaderSkeleton />
      )}
    </section>
  );
};

export default ProjectPage;
