import { DndContext, closestCorners } from "@dnd-kit/core";

import { useAppSelector } from "hooks/useAppSelector";

import { getProjectBoards } from "store/slices/currentProjectSlice/selectors/getProjectBoards";

import TasksBoard from "../TasksBoard";

import classes from "./Boards.module.css";

const Boards = () => {
  const boards = useAppSelector(getProjectBoards);

  return (
    <div className={classes.Boards}>
      <DndContext collisionDetection={closestCorners}>
        {boards?.map((board) => <TasksBoard {...board} key={`board-${board.id}`} />)}
      </DndContext>
    </div>
  );
};

export default Boards;
