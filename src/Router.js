import React from 'react'
import Home from "./Routes/Home/Home";
import Checkout from "./Routes/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="cart/checkout" element={<Checkout />} />
            </Routes></>
    )
}

export default Router