import React, { createContext, useReducer, useEffect, useState } from "react";
import { deliveryCartItems } from "../../../data/cartItemsList";
import { reducer } from "./itemReducer";

export const detailItemListContext = createContext();

// export function removeItem (id) {
//   return ({
//     type:'REMOVE_ITEM',
//     payload: id
//   })
// }

const ExploreRestuarantItem = (props) => {
  let initialState = {
    items: deliveryCartItems,
    totalItems: 0,
    totalAmount: 0,
  };

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCart = () => {
    setCartIsShown(true);
  };

  const hideCart = () => {
    setCartIsShown(false);
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  // remove item
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  const increement = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };
  const decreement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.items]);

  return (
    <detailItemListContext.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        increement,
        decreement,
        showCart,
        hideCart,
        cartIsShown
      }}
    >
      {props.children}
    </detailItemListContext.Provider>
  );
};

export default ExploreRestuarantItem;