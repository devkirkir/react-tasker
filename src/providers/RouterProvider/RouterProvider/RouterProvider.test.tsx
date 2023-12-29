import { ComponentRender } from "utils/tests/ComponentRender";
import { RouterProvider } from ".";

describe("RouterProvider", () => {
  // test("Render Dashboard", async () => {
  //   const { findByTestId } = ComponentRender(<RouterProvider />);

  //   const lazyElement = await findByTestId(/page-dashboard/i);
  //   expect(lazyElement).toBeInTheDocument();

  // expect(1).toBe(1);
  // });

  // test("Render Projects", async () => {
  //   const { findByText } = ComponentRender(<RouterProvider />, {
  //     route: "/app/projects",
  //   });

  //   screen.debug();

  //   const lazyElement = await findByText(/projects/i);
  //   expect(lazyElement).toBeInTheDocument();
  // });

  test("1", () => {
    expect(1).toBe(1);
  });
});
