import { useCounter } from "../hook/UseCounter"
import { CgMathMinus, CgMathPlus } from 'react-icons/cg';
import './ItemCount.css'
export const ItemCount = ({ stock, initial, onAdd }) => {
  const { quantity, increment, decrement } = useCounter(initial, stock)
  return (
    <div className="orderCountAdd">
      <div>
        <button className="btnCountCart" onClick={decrement}><CgMathMinus/></button>
        <label className="productQuantity">{quantity}</label>
        <button className="btnCountCart" onClick={increment}><CgMathPlus/></button>
      </div>
      <div className="addToCart">
        <button onClick={() => onAdd(quantity)} disabled={!stock}>Comprar</button>
      </div>
    </div>
  )
}