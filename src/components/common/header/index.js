import React, {useContext} from "react";
import "./header.css";
import { detailItemListContext } from "../restaurantsItems/exploreRestuarantItem";
import CartContext from "../storeItmToCart/cartContext";
const Header = () => {
const {showCart} = useContext(detailItemListContext)

  const cartCtx = useContext(CartContext);

  // const numberOfCartItems = cartCtx.items.amount
  // console.log('cartCtx.cartContext=amount=',cartCtx.cartContext.items)
  // .items.reduce((curNumber, item) => {
  // return curNumber + item.amount;
  // }, 0);

  return (
    <div className="header max-width">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="Zomato-logo"
        className="header-logo"
      />
      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Ludhiana</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              className="search-input"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        <div>
          <button type="button" className="cart-button" onClick={showCart}>
            <i className="fi fi-sr-shopping-cart-add" /> <span>Your cart</span>
            {" "}
            {/* <span>{numberOfCartItems}</span> */}
          </button>
        </div>

        <div className="profile-wrapper">
          <img
            src="https://b.zmtcdn.com/images/user_avatars/mug_2x.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            className="header-profile-image"
            alt="Profile"
          />
          <span className="header-username">Jaspreet</span>
          <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
