import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { projectsActions } from "store/slices/projectsSlice";
import { getCurrentProjectId } from "store/slices/projectsSlice/selectors/getCurrentProjectId";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();
  const currentProjectId = useAppSelector(getCurrentProjectId);

  useEffect(() => {
    if (currentProjectId == null) {
      dispatch(projectsActions.setCurrentProjectId(projectId));
    }
  }, []);

  return <div>prtoject id - {currentProjectId}</div>;
};

export default ProjectPage;
