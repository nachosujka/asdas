import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className='card'>
      <img src={product.img} className='card-img-top' alt={product.name} />
      <div className='card-body'>
        <h5 className='card-title'>{product.name}</h5>
        <Link to={`/detail/${product.id}`} className='btn btn-primary'>Detalles</Link>
      </div>
    </div>
  )
}

export default Item