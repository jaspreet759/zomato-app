import React, { useContext, useRef } from "react";
import { detailItemListContext } from "../exploreRestuarantItem";
import "./itemList.css";
import CartContext from "../../storeItmToCart/cartContext";
import Header from "../../header/index";
import {toast} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const RestaurantsItemsList = ({ id, cover, title, price, quantity }, props) => {
  let disabled;
  const { removeItem, increement, decreement, showCart } = useContext(
    detailItemListContext
  );

  const cartCtx = useContext(CartContext);
  const inputRef = useRef();

//   console.log('quantity',quantity)
//   console.log('quantity.lenght',quantity.lenght)
// if(quantity !== 0) {
//    disabled = 'false';
// }
// else{
//   disabled = 'true';
// }
  
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNo = +enteredAmount;

    cartCtx.cartContext.addItem({
      id: id,
      name: title,
      amount: quantity,
      price: price,
    });
    // cartCtx.cartContext.totalAmount = quantity
    toast('Hello Geeks')

  };
  // const handleClick = () => {
  //   let isOpened = false;
  //   isOpened = !isOpened;
  // };

  return (
   
    
         <div className="items-info">
      <div className="delivery-item-cover">
        <img src={cover} className="cart-item-image" alt={title} />
      </div>

      <div className="title">
        {title} <br />
      </div>
      <div className="add-minus-quantity">
        <i className="fi fi-sr-plus-small" onClick={() => increement(id)}></i>
        <input ref = {inputRef} type="text" placeholder={quantity} disabled />
        <i className="fi fi-sr-minus-small" onClick={() => decreement(id)}></i>
      </div>

      <div className="price">
        <h3>{price}</h3>
      </div>

      {/* <div className="remove-item">
        <i className="fi fi-rr-trash" onClick={() => removeItem(id)}>
          {" "}
        </i>
      </div> */}
      {/* <Header/> */}

      <div className="remove-item">
        <button onClick = {submitHandler}  > + Add </button>
      </div>
     </div>
    
 
  );
};

export default RestaurantsItemsList;

// const mapDispatchToProps = dispatch => {
//   return {
//     removeItem: () => dispatch(removeItem())
//   }
// }

// export default connect(mapDispatchToProps)(RestaurantsItemsList)
