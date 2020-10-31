import React from "react";
import classes from "./Modal.module.css";
import BackDrop from "../BackDrop/BackDrop";

const modal = (props) => {
  return (
    <>
      <BackDrop show={props.show} cancel={props.cancel} />
      <section className={classes.Modal} style={props.style}>
        {props.children}
      </section>
    </>
  );
};
export default modal;
