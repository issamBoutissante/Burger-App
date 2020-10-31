import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "bacon" },
  { label: "Bacon", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price : <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctr) => {
        return (
          <BuildControl
            key={ctr.label}
            label={ctr.label}
            onAddIngredient={() => props.onAddIngredient(ctr.type)}
            onRemoveIngredient={() => props.onRemoveIngredient(ctr.type)}
            disabled={props.disabled[ctr.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={props.purchasable}
        onClick={props.onOrderNow}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
