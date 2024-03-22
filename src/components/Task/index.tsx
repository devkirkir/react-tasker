import { PropsWithChildren } from "react";
import { useSortable } from "@dnd-kit/sortable";

import classes from "./Task.module.css";

interface TaskProps extends PropsWithChildren {
  id: number;
}

export const Task = (props: TaskProps) => {
  const { id } = props;
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div ref={setNodeRef} className={classes.Task} style={style} {...attributes} {...listeners}>
      qwerty + {id}
    </div>
  );
};

export default Task;
