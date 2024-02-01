import { useRef, type PropsWithChildren, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

interface IProps extends PropsWithChildren {
  isOpen: boolean;
  toggleHandler: () => void;
}

export const Modal = (props: IProps) => {
  const { children, isOpen, toggleHandler } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeHandler = useCallback(
    ({ clientX, clientY, currentTarget }: React.MouseEvent<HTMLElement>) => {
      const { top, right, bottom, left } = currentTarget.getBoundingClientRect();

      if (left > clientX || right < clientX || top > clientY || bottom < clientY) {
        dialogRef?.current?.close();
        toggleHandler();
      }
    },
    [dialogRef],
  );

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.key == "Escape") toggleHandler();
  };

  useEffect(() => {
    isOpen ? dialogRef?.current?.showModal() : dialogRef?.current?.close();

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [isOpen]);

  return createPortal(
    <dialog className={classes.Modal} ref={dialogRef} onClick={closeHandler}>
      {children}
    </dialog>,
    document.getElementById("modal"),
  );
};
