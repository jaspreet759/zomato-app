import CartContext from "./cartContext";
import { useReducer } from "react";

export const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {

    // console.log("state.item", state.items);
    const updateTotalAmount =
      state.totalAmount + action.payload.price * action.payload.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingItemIndex];
    let updateItem;
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    console.log("existingItemIndex", existingItemIndex);
    const cartItemData = state.items.concat(action.payload);

    return {
      items: cartItemData,
      totalAmount: updateTotalAmount,
    };
  }
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, updateCartAction] = useReducer(cartReducer, initialState);
  console.log("initialState-provider", initialState);

  const addItemToCart = (item) => {
    console.log("add item data", item);

    updateCartAction({
      type: "ADD_ITEM",
      payload: item,
    });
    // console.log('add updateCartAction',updateCartAction)
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
