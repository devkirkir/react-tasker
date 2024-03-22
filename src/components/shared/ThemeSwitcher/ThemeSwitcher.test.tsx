import { fireEvent, screen, waitFor } from "@testing-library/react";

import ThemeSwitcher from ".";
import App from "components/App";

import ComponentRender from "utils/tests/ComponentRender";

describe("Component | ThemeSwitcher", () => {
  test("Dark to Light", () => {
    ComponentRender(<ThemeSwitcher />);

    fireEvent.click(screen.getByTestId("theme-switcher"));

    expect(screen.getByTestId("theme-switcher")).toHaveClass("toggleLight");
  });

  test("Light to Dark", () => {
    ComponentRender(<ThemeSwitcher />);

    fireEvent.click(screen.getByTestId("theme-switcher"));

    expect(screen.getByTestId("theme-switcher")).toHaveClass("toggleDark");
  });

  test("App component Light classname", async () => {
    const { findByTestId, getByTestId } = ComponentRender(<App />);

    await waitFor(
      () => {
        expect(getByTestId("theme-switcher")).toBeInTheDocument();
        fireEvent.click(getByTestId("theme-switcher"));
      },
      {
        timeout: 2000,
      },
    );

    const lazyElement = await findByTestId("app");

    expect(lazyElement).toHaveClass("light");
  });

  // test("App component Light classname", async () => {
  //   const { findByTestId } = ComponentRender(<App />);

  //   fireEvent.click(await findByTestId("theme-switcher"));

  //   const lazyElement = await findByTestId("app");

  //   expect(lazyElement).toHaveClass("light");
  // });

  // test("App component Dark classname", async () => {
  //   const { findByTestId } = ComponentRender(<App />);

  //   fireEvent.click(await findByTestId("theme-switcher"));

  //   const lazyElement = await findByTestId("app");

  //   expect(lazyElement).toHaveClass("dark");
  // });
});
