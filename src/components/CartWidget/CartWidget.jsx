import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

export const CartWidget = () => {
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
