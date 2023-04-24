import { useState } from "react"

export const useCounter=(initial=0, stock) =>{
    const[quantity, setQuantity] = useState(initial)


const increment = () => {
    if (quantity< stock){
        setQuantity(quantity+1)
    }
}
const decrement = () => {
    if (quantity< stock && quantity>0){
        setQuantity(quantity-1)
    }
}
return {quantity, increment, decrement} 
}
