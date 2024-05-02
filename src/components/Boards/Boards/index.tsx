import { useEffect, useState } from "react";

import {
  DndContext,
  DragOverEvent,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import useNotification from "hooks/useNotification";

import { getProjectBoards } from "store/slices/currentProjectSlice/selectors/getProjectBoards";
import { getCurrentProject } from "store/slices/currentProjectSlice/selectors/getCurrentProject";
import { getErrorCurrentProjects } from "store/slices/currentProjectSlice/selectors/getErrorCurrentProjects";

import { changeBoardOrder } from "store/slices/currentProjectSlice/services/changeBoardOrder";
import { currentProjectActions } from "store/slices/currentProjectSlice";

import TasksBoard from "../TasksBoard";

import { type ProjectBoards } from "store/slices/projectsSlice/types";

import classes from "./Boards.module.css";

const Boards = () => {
  const [currentBoards, setCurrentBoards] = useState<ProjectBoards[] | null>(null);
  const { addNotification } = useNotification();

  const boards = useAppSelector(getProjectBoards);
  const boardId = currentBoards?.map((board) => board.id) || [];
  const currentProject = useAppSelector(getCurrentProject);
  const errorCurrentProjects = useAppSelector(getErrorCurrentProjects);

  useEffect(() => {
    if (errorCurrentProjects) {
      addNotification(errorCurrentProjects);

      dispatch(currentProjectActions.removeError());
      return;
    }

    setCurrentBoards(boards);
  }, [boards, errorCurrentProjects]);

  const dispatch = useAppDispatch();

  const dragEnd = (event: DragOverEvent) => {
    const currentBoardId = event.active.id;
    const overBoardId = event.over.id;

    if (currentBoardId === overBoardId) return;

    const currentIndex = currentBoards.findIndex((board) => currentBoardId === board.id);
    const overIndex = currentBoards.findIndex((board) => overBoardId === board.id);

    const newBoards = arrayMove(currentBoards, currentIndex, overIndex);

    const data = {
      projectId: currentProject.id,
      boards: newBoards,
    };

    dispatch(changeBoardOrder(data));

    setCurrentBoards(newBoards);
  };

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 30 },
    }),
  );

  return (
    <div className={classes.Boards}>
      <DndContext collisionDetection={closestCorners} onDragEnd={dragEnd} sensors={sensors}>
        <SortableContext items={boardId}>
          {currentBoards?.map((board) => <TasksBoard {...board} key={`board-${board.id}`} />)}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default Boards;
