import { ProjectSchema } from "store/slices/projectsSlice/types";

import ShapedIcon from "components/shared/ShapedIcon";

import classes from "./ProjectHeader.module.css";
import HeartIcon from "components/shared/Icons/HeartIcon";

interface ProjectHeaderProps {
  projectData: ProjectSchema;
}

const ProjectHeader = (props: ProjectHeaderProps) => {
  const { projectTitle, icon, favorite } = props?.projectData || {};

  return (
    <section className={classes.ProjectHeader}>
      <div className={classes.HeaderLeft}>
        <ShapedIcon iconType={icon?.iconType} color={icon?.color} size="l" />

        <h3 className={classes.Title}>{projectTitle}</h3>
      </div>

      <div className={classes.HeaderRight}>
        <HeartIcon width="28px" height="28px" active={favorite} />
      </div>
    </section>
  );
};

export default ProjectHeader;
