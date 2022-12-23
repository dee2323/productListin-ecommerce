import React, { useContext } from "react";
import { productContext } from "../../../context/productContext";
import './style.css'
const Button = ({ id, setShow }) => {
    const { addToCart } = useContext(productContext)
    return <button className='btn' onClick={() => {
        addToCart(id)
        setShow(true)
        setTimeout(() => setShow(false), 500)
    }}>Add to cart <i class="fa fa-light fa-cart-plus"></i></button>

}
export default Button;