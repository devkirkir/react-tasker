import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";

import Task from "components/Boards/Task";

import { type ProjectBoards } from "store/slices/projectsSlice/types";

import classes from "./TasksBoard.module.css";

const TasksBoard = (props: ProjectBoards) => {
  const { tasks = [], id, title } = props;

  return (
    <div className={classes.TasksBoard}>
      <div className={classes.BoardHeader}>
        <span className={classes.BoardTitle}>{title}</span>
        <span className={classes.TasksCount}>{tasks.length}</span>
      </div>

      <SortableContext id={id} items={tasks} strategy={rectSortingStrategy}>
        <div className={classes.TasksContainer}>
          {tasks.map((task) => (
            <Task {...task} key={`task-${task.id}`} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

export default TasksBoard;
