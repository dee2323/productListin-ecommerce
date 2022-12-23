import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import React from "react";
import ProductProvider from './context/productContext'
import Home from "./Routes/Home/Home";
import Checkout from "./Routes/Checkout/Checkout";


const App = () => {
  return (
    <ProductProvider>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="cart/checkout" element={<Checkout />} />
      </Routes>



    </ProductProvider>
  );
}

export default App;
