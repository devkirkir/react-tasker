import { useCallback, useState } from "react";

import ToggleButton from "../ToggleButton";
import SidebarNav from "../SidebarNav";

import Logo from "components/shared/Logo";
import ThemeSwitcher from "components/shared/ThemeSwitcher";

import classNames from "classnames";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const [isSidebarShow, setToggleSidebar] = useState(true);

  const toggleSidebar = useCallback(() => {
    setToggleSidebar((isSidebarShow) => !isSidebarShow);
  }, [isSidebarShow]);

  const sidebarClassNames = classNames(classes.Sidebar, {
    [classes.HiddenSidebar]: !isSidebarShow,
  });

  return (
    <aside className={sidebarClassNames} data-testid="sidebar">
      <section className={classes.SidebarHeader}>
        <Logo isSidebarShow={isSidebarShow} />

        <ToggleButton isSidebarShow={isSidebarShow} toggleSidebar={toggleSidebar} />
      </section>

      <section className={classes.Container}>
        <span className={classes.Label}>MENU</span>

        <SidebarNav isSidebarShow={isSidebarShow} />

        <ThemeSwitcher />
      </section>
    </aside>
  );
};

export default Sidebar;
