import { fireEvent, screen } from "@testing-library/dom";
import { renderHook, act } from "@testing-library/react";
import { useState } from "react";

import { ComponentRender } from "utils/tests/ComponentRender";
import { Modal } from ".";

describe("Component| Modal", () => {
  test("Modal Mount by State", () => {
    const { result } = renderHook(() => useState(false));
    const setModalOpen = result.current[1];

    act(() => setModalOpen(true));

    ComponentRender(
      result.current[0] && (
        <Modal toggleHandler={() => {}} portalContainer={document.body}>
          <span>Hello</span>
        </Modal>
      ),
    );

    expect(screen.getByTestId("Modal")).toBeInTheDocument();
  });

  test("Modal Unmount by State", () => {
    const { result } = renderHook(() => useState(true));
    const setModalOpen = result.current[1];

    act(() => setModalOpen(false));

    ComponentRender(
      result.current[0] && (
        <Modal toggleHandler={() => {}} portalContainer={document.body}>
          <span>Hello</span>
        </Modal>
      ),
    );

    expect(screen.queryByTestId("Modal")).not.toBeInTheDocument();
  });

  test("Modal Unmount by Click on Backdrop", async () => {
    const toggleHandler = jest.fn();

    ComponentRender(
      <Modal toggleHandler={toggleHandler} portalContainer={document.body}>
        <span>Hello</span>
      </Modal>,
    );

    fireEvent.click(screen.getByTestId("Backdrop"));

    expect(toggleHandler).toHaveBeenCalled();
  });

  test("Modal Unmount by Press ESC", async () => {
    const toggleHandler = jest.fn();

    ComponentRender(
      <Modal toggleHandler={toggleHandler} portalContainer={document.body}>
        <span>Hello</span>
      </Modal>,
    );

    fireEvent.keyDown(screen.getByTestId("Backdrop"), { key: "Escape" });

    expect(toggleHandler).toHaveBeenCalled();
  });
});
