import React from "react";
import classes from "./SideDrawer.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../ToolBar/Logo/Logo";
import BackDrop from "../../UI/BackDrop/BackDrop";

const SideDrawer = (props) => {
  return (
    <>
      <BackDrop show={props.show} cancel={props.closeSideBar} />
      <section
        className={[classes.SideDrawer, classes[props.toggle]].join(" ")}
      >
        <Logo className={classes.Logo} />
        <nav>
          <NavigationItems />
        </nav>
      </section>
    </>
  );
};
export default SideDrawer;
