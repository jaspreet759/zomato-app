import React from "react";

import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/common/login/loginPage";
import { NavLinks } from "./components/common/navLink/navLink";
import styled from "styled-components";
import { Protected } from "./components/protected";
import { RestaurantsItemDetail } from "./components/common/restaurantsItems/itemDetail/restaurantsItemDetail";
import ExploreRestuarantItem from "./components/common/restaurantsItems/exploreRestuarantItem";
import CartProvider from "./components/common/storeItmToCart/cartProvider";

const App = () => {
  const Div = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: -70px;
    background-size: cover;
    background-image: url("foodWallpaper.jpg");
    margin: 0;
    padding: 0;
  `;

  return (
    <Div>
      <BrowserRouter>
        <NavLinks />
        <ExploreRestuarantItem>
          <CartProvider>


          <Routes>
            <Route path="/home" element={<Protected Component={HomePage} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart/:id" element={<RestaurantsItemDetail />} />
          </Routes>
          </CartProvider>
        </ExploreRestuarantItem>
      </BrowserRouter>
    </Div>
  );
};

export default App;
