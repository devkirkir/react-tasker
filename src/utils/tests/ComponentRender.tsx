import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { DeepPartial } from "@reduxjs/toolkit";

import { ThemeProvider } from "providers/ThemeProvider";
import ReduxProvider from "providers/ReduxProvider";
import { IStateSchema } from "store/types/StateSchema";

interface IComponentRenderOptions {
  initialState?: DeepPartial<IStateSchema>;
  route?: string;
}

export function ComponentRender(component: JSX.Element, options: IComponentRenderOptions = {}) {
  const { route = "/app/dashboard", initialState = {} } = options;

  return render(
    <ReduxProvider initialState={initialState as IStateSchema}>
      <ThemeProvider>
        <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
      </ThemeProvider>
    </ReduxProvider>,
  );
}
