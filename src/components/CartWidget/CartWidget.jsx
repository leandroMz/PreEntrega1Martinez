import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import '../../Css/NavBar.css'

const CartWidget = () => {
    return (
        <div className='cart-number'>
            <FaShoppingCart />
            <h4>2</h4>
        </div>
    )
}
export default CartWidget