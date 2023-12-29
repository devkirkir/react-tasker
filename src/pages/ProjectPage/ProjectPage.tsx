import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { projectsActions } from "store/slices/projectsSlice";
import { getProjectId } from "store/slices/projectsSlice/selectors/getProjectId";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();
  const currentProjectId = useAppSelector(getProjectId);

  useEffect(() => {
    if (currentProjectId == null) {
      dispatch(projectsActions.setCurrentProjectId(projectId));
    }
  }, []);

  return <div>prtoject id - {projectId}</div>;
};

export default ProjectPage;
