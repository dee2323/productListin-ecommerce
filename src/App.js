import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Home from "./Routes/Home/Home";
import Checkout from "./Routes/Checkout/Checkout";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])
  useEffect(() => {
    axios(
      'https://fakestoreapi.com/products',
    ).then(res => {
      setProducts(res.data)
    }
    );
  }, []);
  const addToCart = (id) => {
    const newProduct = products.find(item => item.id === id)
    let count = 0
    cartProducts.filter(item => {
      if (item.id === id) {
        count++;
      }
    })

    if (count === 0)
      setCartProducts([...cartProducts, { ...newProduct, count: 1 }])
    else {
      setCartProducts(cartProducts.map(item => {
        if (item.id === id) return { ...item, count: item.count + 1 }
        return item
      }))
    }

  }
  const deleteFromCart = (id) => {
    setCartProducts(cartProducts.filter(item => item.id !== id))
  }
  const addToCount = (id) => {
    setCartProducts(cartProducts.map(item => item.id !== id ? item : { ...item, count: item.count + 1 }))
  }
  const decreaseCount = (id) => {
    const item = cartProducts.find(item => item.id === id)
    if (item.count - 1 > 0)
      setCartProducts(cartProducts.map(item => item.id !== id ? item : { ...item, count: item.count - 1 }))
    else
      deleteFromCart(id)

  }
  const restTheCart = () => setCartProducts([])

  return (
    <>
      <Navbar count={cartProducts.length} />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="cart" element={<Cart addToCount={addToCount} decreaseCount={decreaseCount} filterCartProducts={decreaseCount} cartProducts={cartProducts} deleteFromCart={deleteFromCart} />} />
        <Route path="cart/checkout" element={<Checkout cartProducts={cartProducts} restTheCart={restTheCart} />} />
      </Routes>



    </>
  );
}

export default App;
