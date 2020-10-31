import React from "react";
import classes from "./BuildControl.module.css";
const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.onRemoveIngredient}
        disabled={props.disabled}
      >
        less
      </button>
      <button className={classes.More} onClick={props.onAddIngredient}>
        More
      </button>
    </div>
  );
};
export default buildControl;
