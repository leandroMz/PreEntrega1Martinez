import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import "./CartContainer.css"
import { FaTrashAlt } from "react-icons/fa"
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import Swal from 'sweetalert2';

export const CartContainer = ({ product }) => {
  const { cartList, vaciarCart, quitarProducto, totalQuantity, totalPrice } = useCartContext()
  const alertDeleteCart = () => {
    Swal.fire({
      title: '¿Está seguro de vaciar el carrito?',
      text: 'Esta acción eliminará todos los productos del carrito.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, vaciar carrito',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCart();
        Swal.fire(
          'Carrito vaciado',
          'El carrito ha sido vaciado correctamente.',
          'success'
        );
      }
    });
  };
  return (
    <div className='orderItems cartContein'>
      <div className="OrderTitleCart">
        <h3>Carrito ( {totalQuantity()} )  </h3>
      </div>
      {(cartList.length === 0) ?
        <div className="cartInfo">
          <hr />
          <h4>El carrito se encuentra vacio!</h4>
          <p>Por favor agregue productos al carrito para proceder</p>
          <div className="btn-order-cart">
            <Link to={{ pathname: '/', hash: 'productos' }} className="btn btn-cartCero">ir a Comprar</Link>
          </div>
        </div>
        :
        <div>
          <hr />
          {cartList.map(product => (
            <div className="contein-product-cart">
              <img className="product-cart-img" src={product.picture} alt="" />
              <div className="product-cart">
                <div className="product-detail">
                  <h5>{product.name}</h5>
                  <button className="productDelete" onClick={() => quitarProducto(product.id)}>Eliminar del Carrito</button>
                </div>
                <div className="countCart">
                  <button className="btnCountCart"><CgMathMinus /></button>
                  <h7 className="productQuantity">{product.quantity} </h7>
                  <button className="btnCountCart"><CgMathPlus /></button>
                </div>
                <h5 className="productPrice">${(parseInt(product.price) * parseInt(product.quantity))} </h5>
              </div>
              <hr />
            </div>
          ))}
          <div className="contein-total-car">
            <button onClick={alertDeleteCart} className="cartDelete">
              <FaTrashAlt />
            </button>
            <h3 className="card-text">Total ${totalPrice()} </h3>
          </div>
          <div className="ConteinCartContinue">
            <Link to={'/'} className="btn-cartCero-Back">Agregar más Productos</Link>
            <Link to={'/'} className="btn-cartCero">Continuar Compra</Link>
          </div>
        </div>
      }
    </div>
  )
}