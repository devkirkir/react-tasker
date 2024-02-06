import { screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";
import { ComponentRender } from "utils/tests/ComponentRender";
import { RouterProvider } from ".";

describe("Provider | RouterProvider", () => {
  test("Dashboard Route", async () => {
    await act(() => ComponentRender(<RouterProvider />, { route: "/app/dashboard" }));

    await waitFor(() => expect(screen.getByText(/dashboard/i)).toBeInTheDocument(), {
      timeout: 3000,
    });
  });

  test("Projects Route", async () => {
    await act(() => ComponentRender(<RouterProvider />, { route: "/app/projects" }));

    await waitFor(() => expect(screen.getByText(/add project/i)).toBeInTheDocument(), {
      timeout: 5000,
    });
  });

  test("404 Route", async () => {
    await act(() => ComponentRender(<RouterProvider />, { route: "/q" }));

    await waitFor(() => expect(screen.getByText(/notfoundpage/i)).toBeInTheDocument(), {
      timeout: 3000,
    });
  });
});
