import classes from "./ToggleButton.module.css";
import classNames from "classnames";

interface ToggleButtonProps {
  isSidebarShow: boolean;
  toggleSidebar: () => void;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  const { isSidebarShow, toggleSidebar } = props;

  const rightClassName = classNames(classes.ToggleButton, {
    [classes.ToggleButtonRight]: !isSidebarShow,
  });

  return (
    <button className={rightClassName} onClick={toggleSidebar} data-testid="toggle-button">
      <div></div>
    </button>
  );
};
