import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const ItemDetail = ({ product }) => {
  const [isCant, setIsCant] = useState(false)
  const { addToCart, carList } = useCartContext()


  const onAdd = (quantity) => {
    console.log("se agrego", quantity + " " + product.name);
    addToCart({ ...product, quantity })
    setIsCant(true)
    
  }

  console.log(carList);


  return (
    <>
      {product.stock === 0 ? (
        <div className="no-stock-message">
          <p>¡Producto sin stock! Prueba con otro producto.</p>
          <Link to="/" className="btn btn-outline-primary">
            Volver
          </Link>
        </div>
      ) :
        <div className="col">
          <div className="row">
            <img src={product.picture} className="w-50" alt={product.name} />
            <h3>Nombre: {product.name}</h3>
            <h3>Categoría: {product.category}</h3>
            <h3>Precio: {product.price}</h3>
            <h3>Cantidad: {product.quantity}</h3>
          </div>
          <div className='orderAdd'>
            {
              !isCant ?
                <ItemCount initial={0} stock={product.stock} onAdd={onAdd} /> :
                <>
                  <Link to={'/cart'} className="btn btn-outline-danger">Terminar compra</Link>
                  <Link to={'/'} className="btn btn-outline-success">Seguir la compra</Link>
                </>
            }


          </div>
        </div>
      }

    </>
  )
}