import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DndContext, DragEndEvent, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";

import { currentProjectActions } from "store/slices/currentProjectSlice";
import { getProjectById } from "store/slices/projectsSlice/selectors/getProjectById";
import { getLoadingStatus } from "store/slices/currentProjectSlice/selectors/getLoadingStatus";

import ProjectHeader from "components/ProjectHeader";
import ProjectHeaderSkeleton from "components/Skeletons/ProjectHeaderSkeleton";
import TasksBoard from "components/TasksBoard";

import classes from "./ProjectPage.module.css";

const ProjectPage = () => {
  const { projectId } = useParams();

  const dispatch = useAppDispatch();

  const [currentProject] = useAppSelector(getProjectById(projectId));
  const loadingStatus = useAppSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(currentProjectActions.setCurrentProject(currentProject));
  }, [currentProject, loadingStatus]);

  const [items, setItems] = useState([1, 2, 3]);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(Number(active.id));
        const newIndex = items.indexOf(Number(over.id));

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <section className={classes.ProjectPage}>
      {loadingStatus === "fulfilled" ? (
        <>
          <ProjectHeader projectData={currentProject} />

          <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
            <TasksBoard items={items} />
          </DndContext>
        </>
      ) : (
        <ProjectHeaderSkeleton />
      )}
    </section>
  );
};

export default ProjectPage;
