import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import Task from "components/Task";

import classes from "./TasksBoard.module.css";

interface TasksBoardProps {
  items?: number[];
}

const TasksBoard = (props: TasksBoardProps) => {
  const { items = [] } = props;

  return (
    <SortableContext items={items} strategy={rectSortingStrategy}>
      <div className={classes.Board}>
        {items.map((id) => (
          <Task key={id} id={id} />
        ))}
      </div>
    </SortableContext>
  );
};

export default TasksBoard;
