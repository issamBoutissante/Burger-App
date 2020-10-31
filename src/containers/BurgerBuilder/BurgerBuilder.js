import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BurgerController from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/UI/Modal/OrderSummary/OrderSummary";
import axiosInstance from "../../database/AxiosController";
import Spinner from "../../components/UI/Modal/Spinner/Spinner";
import ErrorHandler from "../../Errors/ErrorHandler/ErrorHandler";

const INGREDIENTS_PRICES = {
  salad: 1.5,
  bacon: 2,
  cheese: 1,
  meat: 3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    price: 4,
    purchasable: true,
    showModal: false,
    isContinueClicked: false,
    error: null,
  };
  onOrderCancledHandler = () => {
    this.setState((currentState) => {
      return { showModal: false };
    });
  };
  componentDidMount() {
    axiosInstance
      .get("/ingredients.json")
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  }
  activeSpinner = (boolValue) => {
    this.setState({ isContinueClicked: boolValue });
  };
  onContinueHandler = () => {
    //alert("So you want this Burger .", "OK");
    this.activeSpinner(true);
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: "issam",
        address: {
          city: "ait ziad",
          codePostal: "19495",
          town: "imintghryist",
        },
      },
    };
    axiosInstance
      .post("/order.json", order)
      .then((res) => {
        this.activeSpinner(false);
      })
      .catch((err) => {
        this.activeSpinner(false);
      });
  };
  onOrderNowHandler = () => {
    this.setState((currentState) => {
      return { showModal: true };
    });
  };
  activePurchasable = (ingredients) => {
    let sum = 0;
    Object.values(ingredients).forEach((number) => {
      sum += number;
    });
    this.setState({ purchasable: sum <= 0 });
  };
  addIngredientHandler = (type) => {
    let numberOfIngredient = this.state.ingredients[type];
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type] = ++numberOfIngredient;
    let oldPrice = this.state.price;
    let newPrice = oldPrice + INGREDIENTS_PRICES[type];
    this.setState({ ingredients: newIngredients, price: newPrice });
    this.activePurchasable(newIngredients);
  };
  removeIngredientHandler = (type) => {
    let numberOfIngredient = this.state.ingredients[type];
    if (numberOfIngredient === 0) return;
    let newIngredients = { ...this.state.ingredients };
    newIngredients[type] = --numberOfIngredient;
    let oldPrice = this.state.price;
    let newPrice = oldPrice - INGREDIENTS_PRICES[type];
    this.setState({ ingredients: newIngredients, price: newPrice });
    this.activePurchasable(newIngredients);
  };

  render() {
    const disableInfo = { ...this.state.ingredients };
    for (const key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    let content = this.state.error ? (
      <h1>The ingredients wont be loaded ...Try Again</h1>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      content = (
        <>
          {this.state.showModal ? (
            <Modal
              show={this.state.showModal}
              cancel={this.onOrderCancledHandler}
            >
              {this.state.isContinueClicked ? (
                <Spinner />
              ) : (
                <OrderSummary
                  ingredients={this.state.ingredients}
                  cancel={this.onOrderCancledHandler}
                  continue={this.onContinueHandler}
                  price={this.state.price}
                />
              )}
            </Modal>
          ) : null}
          <Burger ingredients={this.state.ingredients} />
          <BurgerController
            onAddIngredient={this.addIngredientHandler}
            onRemoveIngredient={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.price}
            purchasable={this.state.purchasable}
            onOrderNow={this.onOrderNowHandler}
          />
        </>
      );
    }
    return <>{content}</>;
  }
}
export default ErrorHandler(BurgerBuilder, axiosInstance);
