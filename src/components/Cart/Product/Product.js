import React, { useContext } from "react";
import { productContext } from "../../../context/productContext";
import './style.css'
const Product = ({ image, title, price, id, count }) => {
    const { deleteFromCart, addToCount, decreaseCount } = useContext(productContext)
    return (

        <div className='product'>
            <img src={image} alt="" />
            <p className="cart-title">{title}</p>
            <p className='cart-price'>${count * price}</p>
            <div className="quntity-container">
                <span className='oparation' onClick={() => decreaseCount(id)}>-</span>
                <span>{count}</span>
                <span className='oparation' onClick={() => addToCount(id)}>+</span>


            </div>
            <p ><i class="fa-solid fa-xmark" onClick={() => deleteFromCart(id)}></i></p>
        </div>
    )
}
export default Product;