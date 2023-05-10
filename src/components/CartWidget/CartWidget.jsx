import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import '../../Css/NavBar.css'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';

const CartWidget = () => {

    const { totalQuantity } = useCartContext()


    return (
        <div className='cart-number'>
            <Link to={'/cart'}>
                <FaShoppingCart />
            </Link>
            {totalQuantity() === 0 ?
                "" : 
                <h4>{totalQuantity()}</h4>
            }
        </div>
    )
}
export default CartWidget