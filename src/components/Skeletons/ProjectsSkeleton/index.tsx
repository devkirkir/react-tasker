import classes from "./ProjectsSkeleton.module.css";

//простой скелетон для Projects

const ProjectsSkeleton = () => {
  return (
    <div className={classes.ProjectsSkeleton}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ProjectsSkeleton;
