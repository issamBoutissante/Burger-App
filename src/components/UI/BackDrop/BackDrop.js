import React from "react";
import classes from "./BackDrop.module.css";
const backDrop = (props) => {
  return props.show ? (
    <section className={classes.BackDrop} onClick={props.cancel}></section>
  ) : null;
};
export default backDrop;
