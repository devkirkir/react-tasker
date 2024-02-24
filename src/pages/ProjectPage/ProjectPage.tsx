import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { projectsActions } from "store/slices/projectsSlice";
import { getCurrentProject } from "store/slices/projectsSlice/selectors/getCurrentProject";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();
  const currentProject = useAppSelector(getCurrentProject(projectId));

  useEffect(() => {
    dispatch(projectsActions.setCurrentProject(currentProject));
  }, [currentProject]);

  return <section>{projectId}</section>;
};

export default ProjectPage;
