import { useSortable } from "@dnd-kit/sortable";

import Tag from "components/shared/Tag";

import { type BoardTask } from "store/slices/projectsSlice/types";

import classes from "./Task.module.css";
import { CSS } from "@dnd-kit/utilities";

export const Task = (props: BoardTask) => {
  const { id, title, description, tags = [] } = props;

  const { setNodeRef, attributes, listeners, transform, transition } = useSortable({
    id,
    data: {
      type: "task",
      elem: props,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const renderTags = tags.map((tag, index) => (
    <Tag {...tag} key={`${title}-${tag.label}-${index}`} />
  ));

  return (
    <div className={classes.Task} style={style} ref={setNodeRef} {...attributes} {...listeners}>
      <div className={classes.Tags}>{renderTags}</div>

      <span className={classes.Title}>{title}</span>
      <p className={classes.Description}>{description}</p>
    </div>
  );
};

export default Task;
