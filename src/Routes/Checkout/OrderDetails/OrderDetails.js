import React, { useContext } from "react";
import { productContext } from "../../../context/productContext";
import './style.css'
import { Link } from "react-router-dom";
import Item from "../Items/Item";
const OrderDetails = () => {
    const { cartProducts } = useContext(productContext)
    const listProducts = cartProducts.length > 0 && cartProducts.map(item =>
        <Item {...item} key={item.id} />)
    const totalPrice = cartProducts.reduce((total, num) => {
        return total + num.count * num.price;
    }, 0);
    return (
        <div className="order-details">
            <h3>Order Summary</h3>
            <ul>
                {listProducts}
            </ul>
            <h4>total Price:
                ${totalPrice}
            </h4>
            <button className="checkout-button">
                <Link to="../cart">back to cart</Link>
            </button>

        </div>
    )
}
export default OrderDetails;