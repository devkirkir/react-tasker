import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";

import ThemeProvider from "providers/ThemeProvider";
import ReduxProvider from "providers/ReduxProvider";

import { StateSchema } from "store/types/StateSchema";

interface ComponentRenderOptions {
  initialState?: DeepPartial<StateSchema>;
  route?: string;
}

function ComponentRender(component: JSX.Element, options: ComponentRenderOptions = {}) {
  const { route = "/app/dashboard", initialState = {} } = options;

  return render(
    <ReduxProvider initialState={initialState as StateSchema}>
      <ThemeProvider>
        <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
      </ThemeProvider>
    </ReduxProvider>,
  );
}

export default ComponentRender;
