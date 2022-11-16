import Model from "../UI/Modal";
import "./cartList.css";
import React, { useContext } from "react";
import CartContext from "../storeItmToCart/cartContext";
import { CartItem } from "./cartItem";
import { detailItemListContext } from "../restaurantsItems/exploreRestuarantItem";

export const CartList = (props) => {
  let hasItems = false;
  let cartItems;
  let emptyCartListMsg;
  let totalAmount;
  const { hideCart, clearCart} = useContext(detailItemListContext);
  const cartCtx = useContext(CartContext);
  if (
    cartCtx.cartContext.items.length >= 1
  ) {
    totalAmount = `${cartCtx.cartContext.totalAmount.toFixed(2)}`;
    hasItems += true;
    const addItemToCartHandler = (item) => {

      cartCtx.cartContext.addItem({...item,amount:1})

    };
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
  }
  else if (cartCtx.cartContext.items.length === 0) {
    emptyCartListMsg = "Oops..! No Data Found, Please Add Items ";
    totalAmount = 0;
  }

  return (
    <Model>
      {cartItems}
      <span className="emptyListMsg"> { emptyCartListMsg} </span>
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
