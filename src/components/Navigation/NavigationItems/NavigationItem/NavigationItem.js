import React from "react";
import classes from "./NavigationItem.module.css";
import { Link } from "react-router-dom";

const NavigationItem = (props) => {
  return (
    <li className={classes.NavigatiomItem}>
      {/* <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a> */}
      <Link to={props.Link} className={props.active ? classes.active : null}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavigationItem;
