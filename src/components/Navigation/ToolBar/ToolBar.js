import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "./Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "./DrawerToggle/DrawerToggle";

const toolBar = (props) => {
  return (
    <>
      <header className={classes.ToolBar}>
        <DrawerToggle showSideBar={props.showSideBar}>Menu</DrawerToggle>
        <Logo />
        <nav className={classes.desktopOnly}>
          <NavigationItems />
        </nav>
      </header>
    </>
  );
};

export default toolBar;
