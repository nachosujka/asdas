
const ItemDetail = ({name, img, description}) => {
  return (
    <div className="container">
    <h2>{name}</h2>
<div className="card">
  <img src={img} alt={description} className="card-img-top" />
  <div className="card-body">
  <p className="card-text"></p>
  </div>
  
</div>
</div>
  )
}

export default ItemDetail
