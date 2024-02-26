import { ProjectSchema } from "store/slices/projectsSlice/types";

import ShapedIcon from "components/shared/ShapedIcon";

import classes from "./ProjectHeader.module.css";

interface ProjectHeaderProps {
  projectData: ProjectSchema;
}

const ProjectHeader = (props: ProjectHeaderProps) => {
  const { projectTitle, icon } = props?.projectData || {};

  return (
    <section className={classes.ProjectHeader}>
      <div className={classes.HeaderLeft}>
        <ShapedIcon iconType={icon?.iconType} color={icon?.color} size="l" />

        <h3 className={classes.Title}>{projectTitle}</h3>
      </div>
    </section>
  );
};

export default ProjectHeader;
