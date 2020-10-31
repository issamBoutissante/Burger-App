import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = (props) => {
  return (
    <section className={classes.DrawerToggle} onClick={props.showSideBar}>
      <div />
      <div />
      <div />
      <div />
    </section>
  );
};

export default DrawerToggle;
