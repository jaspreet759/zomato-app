import CartContext from "./cartContext";
import { useReducer } from "react";

export const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =  action.payload.price * action.payload.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

    } else {
      updatedItems = state.items.concat(action.payload);
    }

    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, updateCartAction] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {

    updateCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
    return;
  };

  const removeItemFromCart = (id) => {
    updateCartAction({
      type: "REMOVE_ITEM",
      payload: id,
    });

    return;
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={{ cartContext, addItemToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
