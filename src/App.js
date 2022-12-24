
import React from "react";
import Router from "./Router";
import ProductProvider from './context/productContext'



const App = () => {
  return (
    <ProductProvider>
      <Router />
    </ProductProvider>
  );
}

export default App;
