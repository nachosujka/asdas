// import { useContext, useState } from "react"
// import { CartContext } from "../context/CartContext";
import cart from "../../assets/cart.svg"
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function CardWidget (){
  

    const{totalQuantity} = useCart()

    const handleclick = () => {
        setCont(cont => cont + 1)
    };
    return(
            <Link className="nav-link" to="/cart"><img className="cartImg" alt="cart-widget" src={cart}/>{totalQuantity} </Link>
    )
}
export default CardWidget