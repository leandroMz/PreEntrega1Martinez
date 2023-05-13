import { createContext, useContext, useState } from "react"

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const addToCart = (newProduct) => {
        const productIndex = cartList.findIndex(product => product.id === newProduct.id)
        if (productIndex !== -1) {
            const updatedCartList = [...cartList]
            updatedCartList[productIndex].quantity += newProduct.quantity
            setCartList(updatedCartList)
        } else {
            setCartList([
                ...cartList,
                { ...newProduct }
            ])
        }
    }
    const totalQuantity = () => {
        const quantity = cartList.reduce((acc, product) => acc + product.quantity, 0);
        return quantity
    }
    const totalPrice = () => {
        const total = cartList.reduce((acc, product) => acc + product.price * product.quantity, 0);
        return total
    }
    const quitarProducto = (id) => {
        const actualizarCart = cartList.filter(prod => prod.id !== id)
        setCartList(actualizarCart)
    }
    const vaciarCart = () => {
        setCartList([])
    }
    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCart,
            quitarProducto,
            totalQuantity,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}