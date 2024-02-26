import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "store/slices/projectsSlice";

import type { StateSchema } from "./types/StateSchema";
import { currentProjectReducer } from "./slices/currentProjectSlice";

export const configStore = (preloadedState?: StateSchema) => {
  return configureStore({
    reducer: {
      projects: projectsReducer,
      currentProject: currentProjectReducer,
    },
    preloadedState: preloadedState,
  });
};

const store = configStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
