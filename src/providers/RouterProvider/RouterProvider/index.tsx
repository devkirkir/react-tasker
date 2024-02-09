import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";

import { LandingPageLazy as LandingPage } from "pages/LandingPage/LandingPage.lazy";
import { AppPageLazy as AppPage } from "pages/AppPage/AppPage.lazy";

import { NotFoundPageLazy as NotFoundPage } from "pages/NotFoundPage/NotFoundPage.lazy";
import { DashboardPageLazy as DashboardPage } from "pages/DashboardPage/DashboardPage.lazy";
import { ProjectsPageLazy as ProjectsPage } from "pages/ProjectsPage/ProjectsPage.lazy";
import { ProjectPageLazy as ProjectPage } from "pages/ProjectPage/ProjectPage.lazy";

const RouterProvider = () => {
  return (
    <Suspense fallback="Loading Routes...">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <LandingPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppPage />
            </ProtectedRoute>
          }
        >
          <Route path="*" element={<DashboardPage />} />

          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="projects" element={<ProjectsPage />}>
            <Route path=":projectId" element={<ProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default RouterProvider;
