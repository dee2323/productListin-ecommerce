import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ShowLoading from '../ShowLoading/ShowLoading';
import Empty from './Empty/Empty'
import Product from './Product/Product';
import './style.css'

const Cart = ({ cartProducts, deleteFromCart, addToCount, decreaseCount, filterCartProducts }) => {

    const totalPrice = cartProducts.reduce((total, num) => {
        return total + num.count * num.price;
    }, 0);

    const listProducts = cartProducts.length > 0 ? cartProducts.map(item => <Product key={item.id} deleteFromCart={deleteFromCart} filterCartProducts={filterCartProducts} decreaseCount={decreaseCount} addToCount={addToCount} {...item} />) : <Empty />
    return (
        <div className='outer-container'>

            <div className='button header'>
                <h1>My Cart</h1>
                <button className='confirm-btn '>
                    <Link to='/' className='link'>Back to shopping</Link></button>
            </div>

            {listProducts}
            {cartProducts.length > 0 && <div className='button'>
                <div className='total-price' >Total price: ${totalPrice}</div>
                <button className='confirm-btn'>
                    <Link to='checkout'>checkout</Link> </button>
            </div>
            }

        </div>)
}
export default Cart;