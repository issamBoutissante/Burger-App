import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return (
          <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>;
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="breadTop" />
      {transformedIngredients}
      <BurgerIngredient type="breadBottom" />
    </div>
  );
};
export default burger;
