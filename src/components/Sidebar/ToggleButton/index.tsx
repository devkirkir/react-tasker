import classNames from "classnames";
import classes from "./ToggleButton.module.css";

interface ToggleButtonProps {
  isSidebarShow: boolean;
  toggleSidebar: () => void;
}

const ToggleButton = (props: ToggleButtonProps) => {
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

export default ToggleButton;
