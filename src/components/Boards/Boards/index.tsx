import { useEffect, useMemo, useState } from "react";

import {
  Active,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
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

import {
  ChangeBoardOrderData,
  changeBoardOrder,
} from "store/slices/currentProjectSlice/services/changeBoardOrder";
import { currentProjectActions } from "store/slices/currentProjectSlice";

import TasksBoard from "../TasksBoard";

import type { ProjectBoards } from "store/slices/projectsSlice/types";

import classes from "./Boards.module.css";

const Boards = () => {
  const dispatch = useAppDispatch();
  const { addNotification } = useNotification();

  const [activeElem, setActiveElem] = useState<Active | null>(null);
  const [boards, setBoards] = useState<ProjectBoards[] | null>(null);

  const currentProject = useAppSelector(getCurrentProject);
  const getBoardsSelector = useAppSelector(getProjectBoards);
  const errorCurrentProjects = useAppSelector(getErrorCurrentProjects);

  const boardsIds = useMemo(() => boards?.map((board) => board.id), [boards]);

  useEffect(() => {
    if (errorCurrentProjects) {
      addNotification(errorCurrentProjects);

      dispatch(currentProjectActions.removeError());
      return;
    }

    setBoards(getBoardsSelector);
  }, [getBoardsSelector, errorCurrentProjects]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveElem(event.active);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (active.id === over.id) return;
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over.id) return;

    if (activeElem.data.current.type === "board" && over.data.current.type === "board") {
      const indexActive = boards.findIndex((board) => board.id === active.id);
      const indexOver = boards.findIndex((board) => board.id === over.id);

      if (currentProject.id) {
        const newBoardsArray = arrayMove(boards, indexActive, indexOver);

        const data: ChangeBoardOrderData = {
          projectId: currentProject.id,
          boards: newBoardsArray,
        };

        dispatch(changeBoardOrder(data));

        setBoards(newBoardsArray);
      }
    }
  };

  return (
    <div className={classes.Boards}>
      <DndContext
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        {!!boards && (
          <SortableContext items={boardsIds}>
            {boards.map((board) => (
              <TasksBoard {...board} key={`board-${board.id}`} />
            ))}
          </SortableContext>
        )}

        <DragOverlay>
          {activeElem?.data.current.type === "board" && (
            <TasksBoard
              {...activeElem.data.current.elem}
              key={`board-active-${activeElem.data.current.elem.id}`}
            />
          )}
        </DragOverlay>
      </DndContext>
    </div>
  );
};

export default Boards;
