import { useCounter } from "../hook/UseCounter"

export const ItemCount = ( {stock, initial, onAdd} ) => {
    const {quantity,increment,decrement} = useCounter(initial, stock)
  return (
      <div>
        <div>
        <button onClick={decrement}>-</button>
        <label>{quantity}</label>
        <button onClick={increment}>+</button>
        </div>
        <div>
            <button onClick={ ()=>onAdd(quantity) } disabled={!stock}>Agregar</button>
        </div>
        
    </div>
  )
}
export default ItemCount