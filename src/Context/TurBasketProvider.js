import React, { createContext, useReducer } from "react";

export const turBasket = createContext();

function getCountTursBasket() {
  let basket = JSON.parse(localStorage.getItem("basket"));
  return basket ? basket.turs?.length : 0;
}

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")),
  basketCount: getCountTursBasket(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_BASKET":
      return { ...prevState, basket: action.payload };
    case "CHANGE_BASKET_COUNT":
      return { ...prevState, basketCount: action.payload };
    default:
      return prevState;
  }
}

const TurBasketProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addTurToBasket(turObj) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (basket === null) {
      basket = {
        turs: [],
        totalPrice: 0,
      };
    }

    let newTur = {
      item: turObj,
      count: 1,
      subPrice: turObj.price,
    };

    // Хранение дубликатов
    let filterBasket = basket.turs.filter(elem => {
      return elem.item.id === turObj.id;
    });

    if (filterBasket.length > 0) {
      basket.turs = basket.turs.filter(elem => {
        return elem.item.id !== turObj.id;
      });
    } else {
      basket.turs.push(newTur);
    }
    basket.totalPrice = calcTotalPrice(basket.turs);
    localStorage.setItem("basket", JSON.stringify(basket));
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.turs.length,
    });
  }

  function getBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    if (!basket) {
      basket = {
        turs: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_BASKET",
      payload: basket,
    });
  }

  function changeTurCount(id, count) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.turs = basket.turs.map(elem => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = count * elem.item.price;
      }
      return elem;
    });
    basket.totalPrice = calcTotalPrice(basket.turs);
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function calcTotalPrice(turs) {
    let total = 0;
    turs.map(item => {
      total += item.subPrice;
    });
    return total;
  }

  //   delete products in basket

  function deleteBasketTur(id) {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.turs = basket.turs.filter(elem => {
      return elem.item.id !== id;
    });
    basket.totalPrice = calcTotalPrice(basket.turs);
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.turs.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  function deleteBasketAllTur() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    basket.turs = [];
    basket.totalPrice = 0;
    dispatch({
      type: "CHANGE_BASKET_COUNT",
      payload: basket.turs.length,
    });
    localStorage.setItem("basket", JSON.stringify(basket));
    getBasket();
  }

  const cloud = {
    addTurToBasket,
    getBasket,
    changeTurCount,
    deleteBasketTur,
    deleteBasketAllTur,
    tursInBasket: state.basket,
    basketCount: state.basketCount,
  };
  return <turBasket.Provider value={cloud}>{children}</turBasket.Provider>;
};

export default TurBasketProvider;
