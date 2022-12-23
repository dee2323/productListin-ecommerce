import React from "react";
import './style.css'
const Item = ({ image, count, price, title }) => {
    return (<li className="item"><span className="item-image"><img src={image} height='45rem' width='45rem' /> X{count} </span><span className="head">{title}</span><span className="item-price">${count * price}</span></li >)
}
export default Item;