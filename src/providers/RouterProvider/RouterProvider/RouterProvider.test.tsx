import { screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";

import RouterProvider from ".";
import ComponentRender from "utils/tests/ComponentRender";

describe("Provider | RouterProvider", () => {
  test("Dashboard Route", async () => {
    await act(() => ComponentRender(<RouterProvider />, { route: "/app/dashboard" }));

    await waitFor(() => expect(screen.getByTestId("page-dashboard")).toBeInTheDocument());
  });

  test("Projects Route", async () => {
    await act(() =>
      ComponentRender(<RouterProvider />, {
        route: "/app/projects",
      }),
    );

    await waitFor(() => expect(screen.getByTestId("projects-page")).toBeInTheDocument());
  });

  test("404 Route", async () => {
    await act(() => ComponentRender(<RouterProvider />, { route: "/q" }));

    await waitFor(() => expect(screen.getByText(/notfoundpage/i)).toBeInTheDocument());
  });
});
