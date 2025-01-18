import React, { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: [],
  });

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "ADD_PRODUCTS",
          payload: data.products,
        });
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <h2>Shopping Cart</h2>
      <div style={{ display: "flex" }}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  );
};

export default ShoppingCart;
