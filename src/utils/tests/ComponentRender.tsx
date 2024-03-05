import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";

import ThemeProvider from "providers/ThemeProvider";
import ReduxProvider from "providers/ReduxProvider";

import { StateSchema } from "store/types/StateSchema";
import NotificationProvider from "providers/NotificationProvider";

interface ComponentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
  route?: string;
}

function ComponentRender(component: JSX.Element, options: ComponentRenderOptions = {}) {
  const { route = "/app/dashboard", initialState = {} } = options;

  return render(
    <ReduxProvider initialState={initialState as StateSchema}>
      <ThemeProvider>
        <NotificationProvider>
          <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
        </NotificationProvider>
      </ThemeProvider>
    </ReduxProvider>,
  );
}

export default ComponentRender;
