import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import Header from "../../header";
import { useParams } from "react-router-dom";
import { restaurants } from "../../../../data/restaurants";
import RestaurantsItemsList from "../itemList/itemList";
import { detailItemListContext } from "../exploreRestuarantItem";
import CartContext from "../../storeItmToCart/cartContext";
import "./restaurantsItemDetail.css";
import { CartList } from "../../cart/cartList";
export const RestaurantsItemDetail = () => {
  const restaurantsList = restaurants;

  const { items, clearCart, totalItems, totalAmount, cartIsShown } =
    useContext(detailItemListContext);


  let foodName = {};

  let { id } = useParams();

  restaurantsList.map((data) => {
    if (data.info.resId == id) {
      foodName["itemName"] = data?.info?.name ?? "";
      foodName["itemImage"] = data.info.image;
      foodName["timing"] =
        data?.info?.timing?.text ?? "Closes in 1 hour 21 minutes ";
      foodName["description"] =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry....";

      return foodName;
    }
  });
  return (
    <>
      <div style={{ backgroundColor: "whitesmoke" }}>
        <Header />

        <div style={{ paddingLeft: "10%" }}>
          <h2> {foodName.itemName}</h2>
          <img src={foodName.itemImage.url} alt={foodName.itemName} />
          <p style={{ color: "red" }}>{foodName.timing}</p>
        </div>
        <div style={{ paddingLeft: "10%" }}>
          <section className="main-cart-section">
            <h1>shopping Cart</h1>
            <p className="total-items">
              you have <span className="total-items-count">{totalItems} </span>{" "}
              items in food cart
            </p>

            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars>
                  {items.map((data) => {
                    return <RestaurantsItemsList key={data.id} {...data} />;
                  })}
                </Scrollbars>
              </div>
            </div>

            <div className="card-total">
              <h3>
                Cart Total : <span>{totalAmount}</span>
              </h3>
              <br/>
              {/* <button>checkout</button>{" "} */}
              {/* <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button> */}
            </div>
          </section>
        </div>
      </div>
      {cartIsShown && <CartList />}
    </>
  );
};
