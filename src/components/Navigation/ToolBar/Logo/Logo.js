import React from "react";
import logo from "../../../../assets/images/logo.png";
import classes from "./Logo.module.css";

const Logo = (props) => {
  return (
    <section className={[classes.Logo, props.className].join(" ")}>
      <img src={logo} alt="my burger" />
    </section>
  );
};

export default Logo;
