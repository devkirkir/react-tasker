import { useAppDispatch } from "hooks/useAppDispatch";

import { ProjectSchema } from "store/slices/projectsSlice/types";
import { likeProject } from "store/slices/projectsSlice/servcies/likeProject";

import ShapedIcon from "components/shared/ShapedIcon";
import HeartIcon from "components/shared/Icons/HeartIcon";

import classes from "./ProjectHeader.module.css";

interface ProjectHeaderProps {
  projectData: ProjectSchema;
}

const ProjectHeader = (props: ProjectHeaderProps) => {
  const { id, projectTitle, icon, favorite } = props?.projectData || {};

  const dispatch = useAppDispatch();

  const handleFavorite = () =>
    dispatch(
      likeProject({
        id,
        favorite: !favorite,
      }),
    );

  return (
    <section className={classes.ProjectHeader}>
      <div className={classes.HeaderLeft}>
        <ShapedIcon iconType={icon?.iconType} color={icon?.color} size="l" />

        <h3 className={classes.Title}>{projectTitle}</h3>
      </div>

      <div className={classes.HeaderRight}>
        <HeartIcon width="28px" height="28px" active={favorite} callback={handleFavorite} />
      </div>
    </section>
  );
};

export default ProjectHeader;
