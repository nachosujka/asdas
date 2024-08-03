import { children, createContext, useContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
 const [cart, setCart] = useState([])
const isInCart = (id) => {
    return cart.some(prod => prod.id === id)
}

 const addItem = (productoToAdd) => {
 if (!isInCart(productoToAdd.id)) {
    setCart(prev => [...prev, productoToAdd])
 }else{
 console.error("El producto ya esta en el carrito")
 }
 }
 const getTotalQuantity = () =>{
    let accu =  0
    cart.forEach(prod => {
        accu += prod.quantity
    })
    return accu;
 }
 const totalQuantity = getTotalQuantity()
    const obj = {cart, isInCart, addItem, totalQuantity}
return(
<CartContext.Provider value={obj}>
    {children}
</CartContext.Provider>
)
}


