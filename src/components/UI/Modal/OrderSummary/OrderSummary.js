import React from "react";
import Button from "../../Button/Button";
const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        {" "}
        <strong>
          <span style={{ textTransform: "capitalize" }}>{igkey}</span> :{" "}
          {props.ingredients[igkey]}
        </strong>
      </li>
    );
  });
  return (
    <>
      <p>
        <strong>Your Order</strong>
      </p>
      <p>
        <strong>A delicious burger with the following ingredients :</strong>
      </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price : {props.price.toFixed(2)}</strong>
      </p>
      <p>
        <strong>Continue to Check out</strong>
      </p>
      <Button buttonType="Danger" clicked={props.cancel}>
        Cancel
      </Button>
      <Button buttonType="Success" clicked={props.continue}>
        Continue
      </Button>
    </>
  );
};
export default orderSummary;
