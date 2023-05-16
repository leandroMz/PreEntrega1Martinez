import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import { FaTrashAlt } from "react-icons/fa"
import Swal from 'sweetalert2';
import "./CartContainer.css"
import { ValidateMail, ValidateName } from "../FormValidate/ValidateFunctions";
import { useState } from "react";

export const CartContainer = ({ product }) => {
  const [dataForm, setDataForm] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const { cartList, vaciarCart, quitarProducto, totalQuantity, totalPrice } = useCartContext()
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [errors, setErrors] = useState([]);

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
  const generateOrder = (evt) => {
    evt.preventDefault()
    const order = {}
    order.buyer = dataForm
    order.items = cartList.map(({ name, id, price, quantity }) => ({ id, name, price, quantity }))
    order.total = totalPrice()
    console.log(order)
    const dbFirestore = getFirestore()
    const orderCollection = collection(dbFirestore, 'orders')
    addDoc(orderCollection, order)
      .then(resp => console.log(resp))
  }
  const handleOnChange = (evt) => {
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value
    })
  }
  const handlePay = (ev) => {
    const nameErrors = ValidateName({ name: dataForm.name });
    const emailErrors = ValidateMail({ email: dataForm.email });
    let acc = (nameErrors.length + emailErrors.length);
    const errors = [...nameErrors, ...emailErrors];
    borrarErrores()

    if (acc > 0) {
      ev.preventDefault()
      let ulErrores = document.querySelector("div.errores ul")
      for (let i = 0; i < errors.length; i++) {
        ulErrores.innerHTML += "<li>" + errors[i] + "</li>"
      }
    } else {
      Swal.fire({
        title: `Confirmar pedido`,
        html: `
        <p>Email: ${dataForm.email}</p>
        <p>Direccion Envio: Resistencia, Chaco (Junin 568)</p>
        <p>Precio Total: ${totalPrice()}</p>
        <p>Desea confirmar su pedido y abonar?</p>
      `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'API de MP',
            text: 'Confirmar y Pagar',
            icon: 'info',
            confirmButtonText: 'OK'
          }).then(() => {
            Swal.fire({
              title: '¡Muchas Gracias!',
              text: 'Pedido procesado',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
            vaciarCart()
          });
        }
      });
    }
  }
  const handleContinue = () => {
    setIsFormVisible(true);
  };
  let ele = document.getElementById('parent');
  function borrarErrores() {
    while (ele.lastChild) {
      ele.lastChild.remove();
    }
  }

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
            {!isFormVisible && (
              <button onClick={handleContinue} className="btn-cartCero">Continuar Compra</button>
            )}
          </div>
          <div className="contein-product-cart">
            {isFormVisible ? (
              <form className="formConfirmBuy" onSubmit={generateOrder}>
                <h5>Completa el formulario para continuar</h5>
                <div>
                  <ul className="inputConfirBuy">
                    <li>
                      <h5>Nombre <span style={{ color: 'red' }}>*</span></h5>

                      <input type="text" name="name" onChange={handleOnChange} value={dataForm.name} placeholder="Ingrese su Nombre" />
                    </li>
                    <li>
                      <h5>Telefono</h5>
                      <input type="phone" name="phone" onChange={handleOnChange} value={dataForm.phone} placeholder="Ingrese su Tel" />
                    </li>
                    <li>
                      <h5>Email <span style={{ color: 'red' }}>*</span></h5>
                      <input type="text" name="email" onChange={handleOnChange} value={dataForm.email} placeholder="Ingrese su Email" />
                    </li>

                  </ul>
                  <div className="errores">
                    <ul id="parent">
                      {errors.map((error, index) => (
                        <li key={index}>{error}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button onClick={handlePay}>Confirmar y Pagar</button>
              </form>
            ) : null}
          </div>
        </div>
      }
    </div>
  )
}