import React, { Component } from "react";
import styles from "./BurgerIngredient.module.css";
import propTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "breadBottom":
        ingredient = <div className={styles.BreadBottom}></div>;
        break;
      case "breadTop":
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.seeds1}></div>
            <div className={styles.seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={styles.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={styles.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={styles.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={styles.Bacon}></div>;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}
BurgerIngredient.propTypes = {
  type: propTypes.string.isRequired,
};
export default BurgerIngredient;
