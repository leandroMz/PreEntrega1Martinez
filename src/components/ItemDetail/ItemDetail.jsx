import { Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import { useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemDetail.css'

export const ItemDetail = ({ product }) => {
  const [isCant, setIsCant] = useState(false)
  const { addToCart, carList } = useCartContext()
  const onAdd = (quantity) => {
    addToCart({ ...product, quantity })
    setIsCant(true)
  }
  return (
    <div className='order'>
      {product.stock === 0 ? (
        <div className="no-stock-message">
          <h2>Producto Agotado!</h2>
          <p>Por Favor, prueba con otro producto</p>
          <Link to="/" className="btn-cartCero-Back">
            Volver
          </Link>
        </div>
      ) :
        <div>
          <div className="orderTitleDetail">
            <div className='orderImagesDetail'>
              <img src={product.image} className="w-100" alt="..." />
              <div className='secondaryImages'>
                <div className='imageSecondBox'>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div className='imageSecondBox'>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div className='imageSecondBox'>
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='buyNowProduct'>
              <h2>{product.name}</h2>
              <h3>{product.category}</h3>
              <h4>${product.price}</h4>
              <h7>6 cuotas sin interés</h7>
              <h5>({product.stock} disponibles) </h5>
              <div className=''>
                {
                  !isCant
                    ?
                    <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
                    :
                    <div className='continueBuy'>
                      <Link to={'/'} className="btn-cartCero-Back">Volver</Link>
                      <Link to={'/cart'} className="btn-cartCero">Ir al Carrito</Link>
                    </div>
                }
              </div>
            </div>
          </div>
          <div>
            <h3 className='tapeDetailProducts'>Caracteristicas del Producto</h3>
            <ul className='listDetailProducts'>
              <li className='orderNameProduct'>
                <h4>Marca</h4>
                <p>{product.name}</p>
              </li>
              <li className='orderNameProduct'>
                <h4>Categoria</h4>
                <p>{product.category}</p>
              </li>
              <li>
                <h4>Detalle</h4>
                <p>{product.detail}</p>
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
}