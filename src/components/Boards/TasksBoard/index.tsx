import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { nanoid } from "@reduxjs/toolkit";

import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";

import { getCurrentProject } from "store/slices/currentProjectSlice/selectors/getCurrentProject";
import { AddNewTaskData, addNewTask } from "store/slices/projectsSlice/servcies/addNewTask";

import Task from "components/Boards/Task";
import Button from "components/shared/Button";
import PlusIcon from "components/shared/Icons/PlusIcon";

import { ProjectSchema, type ProjectBoards } from "store/slices/projectsSlice/types";

import classes from "./TasksBoard.module.css";

const TasksBoard = (props: ProjectBoards) => {
  const { tasks = [], id, title } = props;

  const dispatch = useAppDispatch();

  const currentProject = useAppSelector(getCurrentProject);

  const addNewTaskk = () => {
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

    dispatch(addNewTask(taskData));
  };

  return (
    <div className={classes.TasksBoard}>
      <div className={classes.BoardHeader}>
        <span className={classes.BoardTitle}>{title}</span>
        <span className={classes.TasksCount}>{tasks.length}</span>
      </div>

      <Button type="secondary" title="Add New Task" callback={addNewTaskk}>
        <PlusIcon />
      </Button>

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
