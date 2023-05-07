import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import '../../Css/NavBar.css'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (
        <div className='cart-number'>
            <Link to={'/cart'}>
            <FaShoppingCart />
            </Link>
            <h4>2</h4>
        </div>
    )
}
export default CartWidget