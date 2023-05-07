import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

export const CartContainer = () => {
  const { cartList, vaciarCart } = useCartContext()

  if (!cartList) {
    return <div>
      <h2>
        El carrito esta vacio!
      </h2>
      <p>por favor agregue productos al carrito para proceder</p>
      <br />
      <h5>Haga click en Comprar para regresar a los productos e iniciar su compra</h5>
      <Link to={'/'} className="btn btn-outline-success">Comprar</Link>
    </div>
  }
  return (
    <div>
      <h2>Carrito - Productos (2)</h2>

      {(cartList.length === 0)  ?
        <div>
          <h2>El carrito de encuentra vacio!</h2>
          <p>por favor agregue productos al carrito para proceder</p>
          <h5>Haga click en el Boton para regresar a los productos e iniciar su compra</h5>
          <Link to={'/'} className="btn btn-success">ir a Comprar</Link>
        </div>
        :
        <div>
          {cartList.map(product => (
            <div>
              <img src={product.picture} alt="" />
              <h3>detalle:{product.detail}</h3>
              <label>cantidad: {product.quantity} </label>
              <label>precio: {product.price} </label>
              <h4>Subtotal: {(parseInt(product.price) * parseInt(product.quantity))} </h4>
              <button>Eliminar del Carrito</button>
            </div>
          ))}
          <button onClick={vaciarCart} className="btn btn-outline-danger">Vaciar Carrito</button>
          <Link to={'/'} className="btn btn-outline-success">Seguir la compra</Link>
        </div>
      }
    </div>
  )
}
