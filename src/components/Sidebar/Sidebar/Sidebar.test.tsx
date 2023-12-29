import { Sidebar } from ".";
import { fireEvent, screen } from "@testing-library/react";

import { ComponentRender } from "utils/tests/ComponentRender";

describe("Component | Sidebar", () => {
  test("Hide Sidebar", () => {
    ComponentRender(<Sidebar />);

    fireEvent.click(screen.getByTestId("toggle-button"));

    expect(screen.getByTestId("sidebar")).toHaveClass("HiddenSidebar");
  });

  test("Show Sidebar", () => {
    ComponentRender(<Sidebar />);

    fireEvent.click(screen.getByTestId("toggle-button"));
    fireEvent.click(screen.getByTestId("toggle-button"));

    expect(screen.getByTestId("sidebar")).not.toHaveClass("HiddenSidebar");
  });
});
