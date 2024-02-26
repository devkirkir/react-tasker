import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { getCurrentProject } from "store/slices/currentProjectSlice/selectors/getCurrentProject";
import { currentProjectActions } from "store/slices/currentProjectSlice";

import ProjectHeader from "components/ProjectHeader";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();
  const currentProject = useAppSelector(getCurrentProject(projectId));

  useEffect(() => {
    dispatch(currentProjectActions.setCurrentProject(currentProject));
  }, [currentProject]);

  return (
    <section>
      <ProjectHeader />
    </section>
  );
};

export default ProjectPage;
