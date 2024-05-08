import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { nanoid } from "@reduxjs/toolkit";

import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";

import { getCurrentProject } from "store/slices/currentProjectSlice/selectors/getCurrentProject";
import {
  AddNewTaskData,
  addNewTask as addNewTaskService,
} from "store/slices/projectsSlice/servcies/addNewTask";

import Task from "components/Boards/Task";
import Button from "components/shared/Button";
import PlusIcon from "components/shared/Icons/PlusIcon";

import { ProjectSchema, type ProjectBoards } from "store/slices/projectsSlice/types";

import classes from "./TasksBoard.module.css";
import { CSSProperties, useMemo } from "react";
import classNames from "classnames";

const TasksBoard = (props: ProjectBoards) => {
  const { tasks = [], id, title } = props;

  const dispatch = useAppDispatch();
  const currentProject = useAppSelector(getCurrentProject);

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);

  const { setNodeRef, attributes, listeners, transform, transition, isDragging } = useSortable({
    id,
    data: {
      type: "board",
      elem: props,
    },
  });

  const style: CSSProperties = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const tasksBoardClassnames = classNames(classes.TasksBoard, {
    [classes.BoardDragging]: isDragging,
  });

  const addNewTask = () => {
    const boards = currentProject.boards.filter((board) => board.id !== id);

    const newTask: ProjectSchema = {
      ...currentProject,
      boards: [
        ...boards,
        {
          id,
          title,
          tasks: [
            ...tasks,
            {
              id: nanoid(6),
              title: "Title of the task",
              description: "Description of the task",
              tags: [
                {
                  color: "#7864f1",
                  label: "App",
                },
              ],
            },
          ],
        },
      ],
    };

    const taskData: AddNewTaskData = {
      taskId: currentProject.id,
      newTask,
    };

    dispatch(addNewTaskService(taskData));
  };

  return (
    <div
      className={tasksBoardClassnames}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <div className={classes.BoardHeader}>
        <span className={classes.BoardTitle}>{title}</span>
        <span className={classes.TasksCount}>{tasks.length}</span>
      </div>

      <Button type="secondary" title="Add New Task" callback={addNewTask}>
        <PlusIcon />
      </Button>

      <div className={classes.TasksContainer}>
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <Task {...task} key={`task-${task.id}`} />
          ))}
        </SortableContext>
      </div>
    </div>
  );
};

export default TasksBoard;
