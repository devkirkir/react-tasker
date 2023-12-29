import { configureStore } from "@reduxjs/toolkit";
import { projectsReducer } from "store/slices/projectsSlice";

import type { IStateSchema } from "./types/StateSchema";

export const configStore = (preloadedState?: IStateSchema) => {
  return configureStore({
    reducer: {
      projects: projectsReducer,
    },
    preloadedState: preloadedState,
  });
};

const store = configStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
