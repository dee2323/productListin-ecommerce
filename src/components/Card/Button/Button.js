import React from "react";
import './style.css'
const Button = ({ id, addToCart, setShow }) => {
    return <button className='btn' onClick={() => {
        addToCart(id)
        setShow(true)
        setTimeout(() => setShow(false), 500)
    }}>Add to cart <i class="fa fa-light fa-cart-plus"></i></button>

}
export default Button;