import classes from "./ToggleButton.module.css";
import classNames from "classnames";

interface IProps {
  isSidebarShow: boolean;
  toggleSidebar: () => void;
}

export const ToggleButton = (props: IProps) => {
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
