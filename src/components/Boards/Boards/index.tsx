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
import { getErrorCurrentProjects } from "store/slices/currentProjectSlice/selectors/getErrorCurrentProjects";
import { getCurrentProjectId } from "store/slices/currentProjectSlice/selectors/getCurrentProjectId";

import {
  ChangeBoardOrderData,
  changeBoardOrder,
} from "store/slices/currentProjectSlice/services/changeBoardOrder";
import { currentProjectActions } from "store/slices/currentProjectSlice";

import TasksBoard from "../TasksBoard";
import Task from "../Task";

import type { ProjectBoards } from "store/slices/projectsSlice/types";

import classes from "./Boards.module.css";

const Boards = () => {
  const dispatch = useAppDispatch();
  const { addNotification } = useNotification();

  const [activeElem, setActiveElem] = useState<Active | null>(null);
  const [boards, setBoards] = useState<ProjectBoards[] | null>(null);

  const currentProjectId = useAppSelector(getCurrentProjectId);
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

    const activeType = active.data.current.type;
    const overType = over.data.current.type;

    if (active.id === over.id || activeType !== overType) return;

    // if (active.data.current.type === "task") {
    // const overArray = over.data.current.sortable.items;

    // const indexActive = active.data.current.sortable.index;
    // const indexOver = over.data.current.sortable.index;

    // const newArray: BoardTask[] = arrayMove(overArray, indexActive, indexOver);

    // нужно что-то делать с бэком
    // }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const activeType = active.data.current.type;
    const overType = over.data.current.type;

    if (active.id === over.id || activeType !== overType) return;

    if (activeElem.data.current.type === "board") {
      const indexActive = active.data.current.sortable.index;
      const indexOver = over.data.current.sortable.index;

      const newBoardsArray = arrayMove(boards, indexActive, indexOver);

      const data: ChangeBoardOrderData = {
        projectId: currentProjectId,
        boards: newBoardsArray,
      };

      dispatch(changeBoardOrder(data));
      setBoards(newBoardsArray);
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

        {!!activeElem && (
          <DragOverlay>
            {activeElem?.data.current.type === "board" ? (
              <TasksBoard
                {...activeElem.data.current.elem}
                key={`board-active-${activeElem.data.current.elem.id}`}
              />
            ) : (
              <Task
                {...activeElem.data.current.elem}
                key={`task-active-${activeElem.data.current.elem.id}`}
              />
            )}
          </DragOverlay>
        )}
      </DndContext>
    </div>
  );
};

export default Boards;
