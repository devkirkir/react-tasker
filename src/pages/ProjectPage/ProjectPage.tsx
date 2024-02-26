import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { currentProjectActions } from "store/slices/currentProjectSlice";
import { getCurrentProject } from "store/slices/projectsSlice/selectors/getCurrentProject";
import { getLoadingStatus } from "store/slices/currentProjectSlice/selectors/getLoadingStatus";

import ProjectHeader from "components/ProjectHeader";

import classes from "./ProjectPage.module.css";
import ProjectHeaderSkeleton from "components/Skeletons/ProjectHeaderSkeleton";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();
  const [currentProject] = useAppSelector(getCurrentProject(projectId));
  const loadingStatus = useAppSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(currentProjectActions.setCurrentProject(currentProject));
  }, [currentProject]);

  return (
    <section className={classes.ProjectPage}>
      {loadingStatus === "rejected" ? (
        <ProjectHeader projectData={currentProject} />
      ) : (
        <ProjectHeaderSkeleton />
      )}
    </section>
  );
};

export default ProjectPage;
