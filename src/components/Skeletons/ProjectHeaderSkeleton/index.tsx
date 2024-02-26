import classes from "./ProjectHeaderSkeleton.module.css";

const ProjectHeaderSkeleton = () => {
  return (
    <div className={classes.ProjectHeaderSkeleton}>
      <div className={classes.Left}>
        <div className={classes.Icon}></div>
        <div className={classes.Title}></div>
      </div>
    </div>
  );
};

export default ProjectHeaderSkeleton;
