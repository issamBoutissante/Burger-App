import React, { useState } from "react";
import classes from "./Layout.module.css";
import ToolBar from "../Navigation/ToolBar/ToolBar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [closed, setClosed] = useState(false);
  const [sideBarClass, setSideBarClass] = useState("Close");
  const closeSideBarHandler = () => {
    setClosed(false);
    setSideBarClass("Close");
  };
  const showSideBarHandler = () => {
    setClosed(true);
    setSideBarClass("Open");
  };
  return (
    <>
      <ToolBar showSideBar={showSideBarHandler} />
      <SideDrawer
        toggle={sideBarClass}
        show={closed}
        closeSideBar={closeSideBarHandler}
      />
      <div>toolbar,sidedrawer,backdrop</div>
      <main className={classes.container}>{props.children}</main>
    </>
  );
};
export default Layout;
