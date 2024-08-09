import React from 'react'
import { useCart } from '../../hooks/useCart'
import './CartItem.css'

const CartItem = ({id, name, quantity, price}) => {
   const {removeItem} = useCart()
   const handleRemove = (id) =>{
      removeItem(id)
   }
  return (
    <article className='CardCartItem'>
 <header className='HeaderCartItem'>
    <h2>{name}</h2>
 </header>
 <section>
    <p>Cantidad: {quantity}</p>
    <p>Precio x unidad: $ {price}</p>
 </section>
 <footer>
   <p>Precio en total: $ {price * quantity}</p>
   <button className='ButtonCartItem' onClick={()=>handleRemove(id)}> Eliminar</button>
 </footer>
    </article>
  )
}

export default CartItem
