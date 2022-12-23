import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Navbar = ({ count }) => {
    return (<nav class="navbar">
        <span class="logo"><Link to='/'><i class="fa fa-thin fa-store"></i>  Shopping List</Link></span>

        <Link class="active" to='cart'><div className={`${count > 0 ? 'count show' : 'count'}`}>{count}</div> <i class="fa fa-light fa-cart-plus"> </i> CART</Link>

    </nav>)
}
export default Navbar;