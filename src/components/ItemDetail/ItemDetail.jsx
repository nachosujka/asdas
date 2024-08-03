import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { useCart } from "../hooks/useCart"

const ItemDetail = ({name, img, description, stock, category, id, price}) => {
 

const {addItem, isInCart} = useCart()

  const handelAdd = (count) => {
    const productObj= {
      id, name, price, quantity: count
    }
    addItem(productObj)
 
   }
  return (
    <div className="container">
    <h2>{name}</h2>
<div className="card">
  <img src={img} alt={description} className="card-img-top" />
  <div className="card-body">
  <p className="card-text">{description}</p>
  <p className="card-text">Categoria: {category}</p>
  <h2 className="card-text">Precio: ${price}</h2>
  <p className="card-text">Disponible: {stock}</p>
  </div>
</div>
<div>
  {isInCart(id) ? (
    <Link to='/cart'>Finalizar compra</Link>
 
): 
<ItemCount stock={stock} onAdd={handelAdd}/>
}
  
  </div>
</div>
  )
}

export default ItemDetail
