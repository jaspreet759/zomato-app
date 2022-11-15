import Model from "../UI/Modal";
import "./cartList.css";
import { detailItemListContext } from "../restaurantsItems/exploreRestuarantItem";
import React, { useContext } from "react";
import CartContext from "../storeItmToCart/cartContext";

// import CartItem from "./cartItem";
import { CartItem } from "./cartItem";

export const CartList = (props) => {
  let hasItems;
  let cartItems;
  let emptyCartListMsg;
  let totalAmount;
  const { hideCart } = useContext(detailItemListContext);
  const cartCtx = useContext(CartContext);

  console.log("cartCtx.cartContext.items", cartCtx.cartContext);
  if (cartCtx.cartContext.items != undefined) {
    totalAmount = `${cartCtx.cartContext.totalAmount.toFixed(2)}`;
    // console.log('cartCtx.cartContext.totalAmount==',cartCtx.cartContext)
    // console.log('totalAmount==',totalAmount)
    hasItems = cartCtx.cartContext.items.lenght > 0;

    const addItemToCartHandler = (item) => {};
    const rmvItemFromCartHandler = (id) => {};
    cartItems = (
      <ul className="cart-items">
        {cartCtx.cartContext.items.map((item) => (
          // {item.id},
          <CartItem
            // key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={rmvItemFromCartHandler.bind(null, item.id)}
            onAdd={addItemToCartHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
  } else {
    emptyCartListMsg = "No Data Found, Please Add Items From Explore Section";
    totalAmount = 0
  }

  return (
    <Model>
      {cartItems}
      <span className="emptyListMsg"> {!cartItems && emptyCartListMsg} </span>
      <div className="total">
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button -- alt" onClick={hideCart}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Model>
  );
};
