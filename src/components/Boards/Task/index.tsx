import { useSortable } from "@dnd-kit/sortable";

import Tag from "components/shared/Tag";

import { type BoardTasks } from "store/slices/projectsSlice/types";

import classes from "./Task.module.css";

export const Task = (props: BoardTasks) => {
  const { id, title, description, tags = [] } = props;
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  const renderTags = tags.map((tag, index) => (
    <Tag {...tag} key={`${title}-${tag.label}-${index}`} />
  ));

  return (
    <div ref={setNodeRef} className={classes.Task} style={style} {...attributes} {...listeners}>
      <div className={classes.Tags}>{renderTags}</div>

      <span className={classes.Title}>{title}</span>
      <p className={classes.Description}>{description}</p>
    </div>
  );
};

export default Task;
