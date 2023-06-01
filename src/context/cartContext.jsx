import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/cartReducer";
const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("productCart");
  if (
    localCartData &&
    Array.isArray(JSON.parse(localCartData)) &&
    JSON.parse(localCartData).length > 0
  ) {
    return JSON.parse(localCartData);
  }
  return [];
};
const initialState = {
  cart: getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 500,
};
// eslint-disable-next-line react/prop-types
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (_id, pickColor, productsQuantity, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { _id, pickColor, productsQuantity, product },
    });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setIncreseQuantity = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  const setDecreseQuantity = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });

    localStorage.setItem("productCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        setIncreseQuantity,
        setDecreseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
