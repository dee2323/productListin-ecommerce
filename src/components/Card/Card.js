import React from 'react'
import Button from './Button/Button';
import './style.css'
const Card = ({ image, price, title, id, setShow }) => {

    return <div className='product-container'>
        <img src={image} alt='' />
        <div className='description'>
            <p className='title'>{title}</p>
            <p>${price}</p>
        </div>
        <Button id={id} setShow={setShow} />
    </div>
}
export default Card;