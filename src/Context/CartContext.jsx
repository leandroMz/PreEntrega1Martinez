import { createContext, useContext, useState } from "react"
// crear un contexto inicializado con []
// exportar app


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) => {
        // localStorage.setItem('cartList', cartList)
        // manejar con base de dato ? 

        // agregar logica de producto repetido
        setCartList([
            ...cartList,
            { ...newProduct}
        ])
    }

    // catidad total de productos
    // precio total de la compra
    const totalPrice = () => {
        const total = cartList.reduce((acc, product) => acc + product.totalPrice, 0);
        return total;
    }
    // eliminar por item

    // vaciarCarrtio
    const vaciarCart = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            // estado y func intectados
            cartList,
            addToCart,
            vaciarCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}
