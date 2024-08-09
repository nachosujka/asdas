
import cart from "../../assets/cart.svg"
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import './CardWidget.css'
function CardWidget (){
  

    const{totalQuantity} = useCart()

    const handleclick = () => {
        setCont(cont => cont + 1)
    };
    return(
            <Link className="CartWidget" to="/cart"><img className="cartImg" alt="cart-widget" src={cart}/>{totalQuantity} </Link>
    )
}
export default CardWidget